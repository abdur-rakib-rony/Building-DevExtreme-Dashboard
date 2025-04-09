# DevExtreme Dashboard with Tailwind CSS and Pinia

This project demonstrates a modern dashboard application built with Nuxt 3, DevExtreme components, Tailwind CSS, and Pinia for state management.

## Features

- **Responsive Layout** - Fully responsive design that works on mobile, tablet, and desktop
- **DevExtreme Integration** - Utilizes DevExtreme components for data visualization and user interaction
- **State Management** - Implements Pinia stores for centralized state management
- **Loading States** - Advanced skeleton loaders for a better loading experience
- **Custom Styling** - Tailwind CSS styling applied to DevExtreme components
- **Interactive Charts** - Bar chart, pie chart with tooltips and legends
- **Data Grid** - Sortable, filterable data grid with pagination

## Components

### Dashboard Layout
The main dashboard layout organizes the various components into a cohesive interface with responsive grid layouts.

### KPI Cards
Displays key performance indicators with trend indicators and value formatting.

### Sales Chart
Bar chart showing sales data compared to targets, with line and bar visualization.

### Traffic Pie Chart
Pie chart showing traffic source distribution with tooltips and legends.

### Orders Grid
Interactive data grid showing order data with filtering, sorting, and pagination capabilities.

### Message Form
Demo component showing Pinia state management with toast notifications.

## Technical Implementation

### State Management
The application uses Pinia stores to manage application state:

- `dashboard.ts` - Manages all dashboard data including KPIs, charts, and grid data
- `test.ts` - Simple store for demonstrating state management in the message form

### Loading States
Each component implements skeleton loaders using Tailwind's `animate-pulse` class for improved user experience during data fetching:

- Skeleton loaders for KPI cards
- Skeleton loaders for charts
- Skeleton loaders for data grids
- Toast notifications for user feedback

### DevExtreme Integration
The application showcases integration with various DevExtreme components:

- Charts (Bar, Line, Pie)
- DataGrid with filtering and sorting
- Text inputs and buttons
- Toast notifications

### Styling
The project demonstrates how to apply custom Tailwind CSS styling to DevExtreme components:

- Custom button styling
- Custom card designs
- Responsive layout adjustments

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository: https://github.com/abdur-rakib-rony/Building-DevExtreme-Dashboard.git
2. Install dependencies

## License

MIT