# Qubix Escrow Platform Security Specification

This document defines the mathematical boundary conditions, data invariants, and the adversarial "Dirty Dozen" payloads mapped against the Security Rules.

## 1. Data Invariants

1. **User Profiling Lock**: A user document (`/users/{userId}`) can only be created or modified if `userId` exactly matches the authenticated operator's UID (`request.auth.uid`). Users are strictly forbidden from altering their own `role` or `isAdmin` fields after onboarding to prevent privilege escalation.
2. **Contract State Safety**: A contract belonging to `/contracts/{contractId}` must have valid `clientEmail` or `freelancerEmail` corresponding to the active operator. Status transitions must go in logical order, and settled contracts are locked against any changes.
3. **Billing Integrity**: Transactions under `/payments/{paymentId}` must correlate with a user who belongs to the contract. Fields are read-only upon creation.
4. **Chat Privacy limits**: Communication threads under `/chats/{chatId}` and nested `/chats/{chatId}/messages/{messageId}` can only be read or written by users matching `clientEmail` or `freelancerEmail`.

---

## 2. The "Dirty Dozen" Adversarial Payloads (Payload-First TDD)

These payloads must be rejected by the ruleset:

1. **Identity Theft (Spoofing Owner ID)**:
   - *Target*: `users/victim-uid-abc-123` (by attacker `auth.uid = "attacker-456"`)
   - *Result*: `Permission Denied` (Blocked because `userId != request.auth.uid`).

2. **Privilege Escalation (Modifying Role)**:
   - *Target*: `users/attacker-456`
   - *Payload*: `{ role: 'admin' }` (Updating role to gain admin capabilities)
   - *Result*: `Permission Denied` (Blocked via immutable role guard).

3. **Orphaned Contract Spill**:
   - *Target*: `contracts/any-junk-id` (Created with random/invalid referenced emails)
   - *Payload*: `{ title: 'Spam Contract', clientEmail: 'someoneelse@domain.com', freelancerEmail: 'unrelated@domain.com', budget: 1000 }`
   - *Result*: `Permission Denied` (Requires `clientEmail == request.auth.token.email` or `freelancerEmail == request.auth.token.email` with strict email verification status).

4. **Negative Budget Injection**:
   - *Target*: `contracts/contract-1`
   - *Payload*: `{ budget: -5000 }`
   - *Result*: `Permission Denied` (Requires strictly positive numeric bounds on money fields).

5. **Arbitrary Release of Escrow Funds (State Shortcutting)**:
   - *Target*: `contracts/contract-1`
   - *Payload*: Update `released: 4800` directly while status is `In Progress`
   - *Result*: `Permission Denied` (Restricted status-to-settlement transition logic).

6. **Spoofed Payment Audit Trail**:
   - *Target*: `payments/tx-fake-999`
   - *Payload*: `{ invoice: 'INV-FAKE', userEmail: 'victim@domain.com', amount: 5000 }` by another user
   - *Result*: `Permission Denied` (Cannot log payments for alternative emails).

7. **Sieve Message Interception (PII Leak)**:
   - *Target*: Getting threads of random clients.
   - *Query*: `db.collection('chats').get()`
   - *Result*: `Permission Denied` (Rules prevent blanket queries without precise filters checking `clientEmail` or `freelancerEmail`).

8. **Over-sized Payload Exhaustion (Denial-of-Wallet)**:
   - *Target*: `chats/thread-1/messages/msg-123`
   - *Payload*: Containing a `text` field size of 90,000 characters.
   - *Result*: `Permission Denied` (Strict string limit check: `.size() <= 2000`).

9. **Self-Promoting Testimonials Hack**:
   - *Target*: Writing fake global settings or configuration variables under `/users/` using invalid identifiers.
   - *Result*: `Permission Denied` (Documents must pass strict regex pattern validation: `id.matches('^[a-zA-Z0-9_\\\\-]+$')`).

10. **Immutable Timestamp Spoofing**:
    - *Target*: Creating `/contracts/contract-1` with arbitrary custom past timestamps.
    - *Payload*: `{ createdAt: timestampFromClient }`
    - *Result*: `Permission Denied` (Must strictly validate against `request.time`).

11. **Shadow Update injection (Ghost fields)**:
    - *Target*: `users/attacker-456`
    - *Payload*: `{ name: 'John', unapprovedProperty: 'ghost_attribute' }`
    - *Result*: `Permission Denied` (Keys size and content checked strictly to block ghost fields).

12. **Anonymous Spam Assault**:
    - *Target*: Writing to chat threads as an unauthenticated or unverified client.
    - *Result*: `Permission Denied` (Auth email verification must be valid).
