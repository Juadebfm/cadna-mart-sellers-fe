# CADNA MART — Seller Platform
## Flow List for Development Handoff

_Source: CADNA MART DESIGN.fig → DASHBOARDS-ADMIN-PARTNERS-SELLERS_

---

## 1. Sign-up / Onboarding
1. Sign-up – Email Address
2. Sign-up – Email Verification (OTP sent)
3. Sign-up – Email Verification 2 (OTP entry state)
4. Sign-up – Details (business / personal info)
5. Sign-up – Password (create password)
6. Sign-up – Verify (review submission)
7. Sign-up – Verify Complete (submitted confirmation)
8. Sign-up – Application Status (pending / approved / rejected)

**Happy path:** Email Address → Email Verification → Details → Password → Verify → Verify Complete → Application Status

---

## 2. Seller Landing & KYC
1. Seller Landing Page (logged-in, pre-KYC state)
2. KYC Banner (prompt on dashboard)
3. Sellers – KYC Verification (document upload + submission)

---

## 3. Dashboard
1. Sellers – Dashboard (home / metrics overview)
2. Seller Side Menu (global nav component)
3. Account Btn (header dropdown)

---

## 4. Products
1. Sellers – Products (list view)
2. Sellers – Products – View Product
3. Sellers – Products – Create Product
4. Sellers – Products – Edit Product

**Product actions (modals):**
- View Public Link – Live
- View Public Link – Draft
- Close Product Sales
- Deactivate Product
- Delete Product
- Manage Recommendations
- Manage Recommendations – Added

---

## 5. Product Attributes (sub-flow of Edit Product)
1. Edit Product – Add Attribute
2. Edit Product – Attribute Added
3. Edit Product – Attribute Deleted

---

## 6. Product Variants (sub-flow of Edit Product)
1. Edit Product – Variants (entry)
2. Variants – Size Added
3. Variants – Size Added (S)
4. Variants – Size Added (S, M)
5. Variants – Size Added (S, M, XL)
6. Variants – Custom Size
7. Variants – Custom Size Added
8. Variants – Colour
9. Variants – Colour Added (Blue)
10. Variants – Colour Added (Blue, second state)

---

## 7. Bulk Upload
1. Sellers – Bulk Upload (entry / overview)
2. Bulk Upload – Step 1 (download template)
3. Bulk Upload – Step 2 (upload CSV)
4. Bulk Upload – Step 2 – CSV Uploaded
5. Bulk Upload – Step 3.1 (review)
6. Bulk Upload – Step 3.2
7. Bulk Upload – Step 3.3
8. Bulk Upload – Step 3.4
9. Bulk Upload – Step 3.5
10. Bulk Upload – Step 4 (confirmation)

**Help modals:**
- How to Bulk Upload – 1
- How to Bulk Upload – 2
- How to Bulk Upload – 3
- How to Bulk Upload – 4

---

## 8. Orders
1. Sellers – Orders (list + detail states)

---

## 9. Storefront
1. Sellers – Storefront (public store config)
- Page Link (component – shareable URL)

---

## 10. Wallet
1. Sellers – Wallet (balance, transactions, payouts)

---

## 11. Account Settings
1. Sellers – Account Settings (profile, security, preferences)

---

## 12. Support
1. Sellers – Support (tickets / help)

---

## Shared / Components
- Sellers – Platform Components (design system reference)
- Seller Side Menu
- Account Btn
- KYC Banner
- Page Link
