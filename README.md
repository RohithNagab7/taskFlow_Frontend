# MERN Frontend - Agent Management & Task Distribution

This is the frontend for a MERN stack application that manages Agents, allows file uploads for task distribution, and shows distributed task lists.  
Access to all features is restricted to authenticated (logged-in) users.

---

## Features

### Authentication
- Secure Admin Login page.
- Routes protected using JWT cookie authentication.
- Users cannot access any page (Add Agent, Distributed Lists) without logging in.

### Agent Management
- **Add Agent Page**
  - Add new agents by providing name, email, mobile number, and password.
  - Automatically redistributes uploaded tasks whenever a new agent is added.
- **Delete Agent**
  - Agents can be removed, and tasks are automatically rebalanced among remaining agents.

### Task Distribution
- **Distributed Page**
  - Upload a `.csv` file containing the task data (`FirstName, Phone, Notes`).
  - The system distributes the tasks equally among available agents.
  - Displays a scrollable list of agents, each with their assigned tasks.
  - Each agent card shows:
    - Name
    - Email
    - Mobile Number
    - Assigned tasks with proper separation and layout.

### Protected Routing
- Only logged-in users can access:
  - `/add-agent`
  - `/distributed`
- If not logged in, users are redirected to the login page.

---

## Tech Stack

### Frontend
- React (Vite)
- TypeScript
- React Router DOM
- Axios
- React Hook Form + Zod
- Styled Components
- JWT Authentication (via cookies)
