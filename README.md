# 🏠 NextGen AI Interior Assistant

An AI-powered Interior Design Assistant built to help interior design firms qualify leads, collect customer requirements, and improve client engagement through an interactive chatbot experience.

🔗 Live Demo: https://nextgen-ai-interior-assistant.vercel.app

---

## 🚀 Features

### 🤖 AI-Powered Lead Qualification

- Interactive chatbot experience
- Collects customer requirements step-by-step
- Understands interior design inquiries
- Guides users through a structured conversation flow

### 📋 Lead Collection Workflow

- Customer Name Collection
- Property Type Selection
- Interior Design Requirements
- Timeline Collection
- Phone Number Capture

### 🎯 Smart User Experience

- Real-time chatbot responses
- Auto-scroll conversation flow
- Mobile responsive design
- Professional UI/UX
- Auto-disable chat after lead submission
- Auto-close chatbot after conversation completion

### 🌐 Production Deployment

- Frontend deployed on Vercel
- Backend deployed on Render
- Live API integration
- Environment-based configuration

---

## 🏗️ Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend

- FastAPI
- Python
- Uvicorn

### Deployment

- Vercel (Frontend)
- Render (Backend)
- GitHub

---

## 📂 Project Structure

```bash
nextgen-ai-interior-assistant/
│
├── nextgen-design-website/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── types/
│
├── nextgen-ai-backend/
│   ├── main.py
│   ├── ai_service.py
│   ├── agent.py
│   ├── tools.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/hfeezsayed/nextgen-ai-interior-assistant.git

cd nextgen-ai-interior-assistant
```

### Frontend Setup

```bash
cd nextgen-design-website

npm install

npm run dev
```

### Backend Setup

```bash
cd nextgen-ai-backend

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## 🌍 Environment Variables

Frontend:

```env
NEXT_PUBLIC_API_URL=YOUR_BACKEND_URL
```

Example:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
```

---

## 🎯 Use Case

This project is designed for:

- Interior Design Firms
- Architecture Consultants
- Home Renovation Businesses
- Commercial Space Designers
- Lead Generation Workflows

---

## 🔮 Future Enhancements

- Admin Dashboard
- Lead Management System
- CRM Integration
- Analytics Dashboard
- WhatsApp Notifications
- Email Automation
- Appointment Scheduling
- AI Design Recommendations

---

## 👨‍💻 Developer

**Hafeez Ali**

Aspiring AI Engineer focused on building real-world AI applications using:

- Python
- FastAPI
- Next.js
- OpenAI
- MongoDB
- AI Automation

GitHub:
https://github.com/hfeezsayed

LinkedIn:
https://www.linkedin.com/in/hafeez-ali-710b89a0/
