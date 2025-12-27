# Digifice 🎓  
**Centralized Student Web Portal**

Digifice is a role-based web application designed to centralize academic and administrative processes for a university. The system provides separate dashboards for **Students**, **Lecturers**, and **Administrators**, ensuring secure and efficient access to features based on user roles.

---

## 🚀 Features

- 🔐 Secure authentication & role-based access control
- 🎓 Student dashboard (results, GPA, medical submissions, announcements)
- 👨‍🏫 Lecturer dashboard (course updates, schedules, announcements)
- 🛠️ Admin dashboard (user management, results, medical approvals)
- 📢 Centralized announcement & notification system
- 📊 GPA calculation and academic tracking

---

## 🧑‍💻 Tech Stack

- **Frontend & Backend:** Next.js (App Router) + TypeScript  
- **UI:** React, Tailwind CSS  
- **Database:** MongoDB Atlas  
- **Authentication:** NextAuth / JWT  
- **Deployment:** Vercel / AWS (Free Tier)

---

## 🏗️ Project Structure

The project follows an **industry-standard, feature-based architecture** with role-separated dashboards for scalability and maintainability.

---

## Project Structure

```
digifice/
│
├── app/                              # Next.js App Router (pages, layouts, routing)
│   ├── (auth)/                       # Authentication routes (login, reset, verify)
│   │   ├── login/
│   │   │   └── page.tsx              # Login page UI
│   │   ├── forgot-password/
│   │   └── reset-password/
│   │
│   ├── (dashboard)/                  # All role-based dashboards
│   │   ├── student/                  # Student dashboard routes
│   │   │   ├── layout.tsx            # Student dashboard layout (sidebar/header)
│   │   │   ├── page.tsx              # Student dashboard home
│   │   │   ├── results/              # Exam results & GPA pages
│   │   │   ├── medical/              # Medical submission & tracking
│   │   │   ├── announcements/        # Announcements & notifications
│   │   │   └── profile/              # Student profile & settings
│   │   │
│   │   ├── lecturer/                 # Lecturer dashboard routes
│   │   │   ├── layout.tsx             # Lecturer dashboard layout
│   │   │   ├── page.tsx               # Lecturer dashboard home
│   │   │   ├── courses/               # Courses & materials
│   │   │   ├── schedules/             # Lecture schedules & updates
│   │   │   └── announcements/         # Lecturer announcements
│   │   │
│   │   ├── admin/                    # Admin / staff dashboard routes
│   │   │   ├── layout.tsx             # Admin dashboard layout
│   │   │   ├── page.tsx               # Admin dashboard home
│   │   │   ├── users/                 # Manage students, lecturers, admins
│   │   │   ├── results/               # Upload & manage results
│   │   │   ├── medical/               # Review medical submissions
│   │   │   ├── announcements/         # System-wide announcements
│   │   │   └── system-settings/       # Configurations & permissions
│   │
│   ├── api/                          # Backend API routes (server-side)
│   │   ├── auth/                     # Auth APIs (login, roles, sessions)
│   │   ├── users/                    # User CRUD & role management
│   │   ├── results/                  # Results & GPA APIs
│   │   ├── medical/                  # Medical submission APIs
│   │   ├── announcements/            # Announcement APIs
│   │   └── notifications/            # Notification APIs
│   │
│   ├── layout.tsx                    # Root app layout
│   ├── page.tsx                      # Public landing page
│   └── not-found.tsx                 # 404 page
│
├── components/                       # Reusable UI components
│   ├── ui/                           # Buttons, modals, inputs, tables
│   ├── layout/                       # Navbar, sidebar, footer components
│   ├── dashboard/                    # Dashboard widgets (cards, charts)
│   └── forms/                        # Reusable form components
│
├── features/                         # Business logic (domain-driven design)
│   ├── auth/                         # Authentication logic & helpers
│   ├── users/                        # User management logic
│   ├── results/                      # GPA & result calculations
│   ├── medical/                      # Medical workflow logic
│   ├── announcements/                # Announcement logic
│   └── notifications/                # Notification handling
│
├── hooks/                            # Custom React hooks
│   ├── useAuth.ts                    # Auth & session hook
│   ├── useUser.ts                    # Current user data hook
│   └── useRoleGuard.ts               # Role-based access hook
│
├── lib/                              # Core libraries & configs
│   ├── db.ts                         # MongoDB connection
│   ├── auth.ts                       # Auth configuration (NextAuth / JWT)
│   ├── permissions.ts                # Role-permission mapping
│   └── constants.ts                  # App-wide constants
│
├── middleware.ts                     # Route protection & role-based access
│
├── models/                           # Mongoose schemas & TypeScript types
│   ├── User.ts                       # User model (student, lecturer, admin)
│   ├── Result.ts                     # Exam results model
│   ├── Medical.ts                    # Medical submissions model
│   ├── Announcement.ts               # Announcements model
│   └── Notification.ts               # Notifications model
│
├── services/                         # External services
│   ├── email.service.ts              # Email sending logic
│   ├── file-upload.service.ts        # Cloudinary / S3 uploads
│   └── notification.service.ts       # Real-time / email notifications
│
├── utils/                            # Utility helper functions
│   ├── apiResponse.ts                # Standard API responses
│   ├── date.ts                       # Date formatting helpers
│   ├── gpaCalculator.ts              # GPA calculation logic
│   └── validators.ts                 # Input validation helpers
│
├── styles/                           # Global styles
│   └── globals.css
│
├── types/                            # Global TypeScript types & interfaces
│   ├── user.ts                       # User-related types
│   ├── auth.ts                       # Auth/session types
│   └── api.ts                        # API response types
│
├── public/                           # Static assets
│   └── images/
│
├── .env.local                        # Environment variables
├── next.config.mjs                   # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json
└── README.md


```