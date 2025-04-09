import { defineStore } from 'pinia';

interface KpiItem {
  title: string;
  value: string;
  changePercent: number;
  trend: 'up' | 'down';
  subtitle: string;
}

interface SalesDataItem {
  month: string;
  amount: number;
  target: number;
}

interface TrafficDataItem {
  source: string;
  visitors: number;
}

interface Order {
  id: number;
  customer: string;
  date: Date;
  amount: number;
  status: number;
}

interface OrderStatus {
  id: number;
  name: string;
  color: string;
}

interface DashboardState {
  kpiData: KpiItem[];
  salesData: SalesDataItem[];
  trafficData: TrafficDataItem[];
  ordersData: Order[];
  orderStatuses: OrderStatus[];
  lastUpdate: Date;
  isLoading: boolean;
}

export const useDashboardStore = defineStore('dashboard', {
  state: (): DashboardState => ({
    kpiData: [
      {
        title: 'Total Sales',
        value: '$24,543',
        changePercent: 12.5,
        trend: 'up',
        subtitle: 'vs previous month',
      },
      {
        title: 'New Customers',
        value: '145',
        changePercent: 8.2,
        trend: 'up',
        subtitle: 'vs previous month',
      },
      {
        title: 'Conversion Rate',
        value: '3.8%',
        changePercent: 1.1,
        trend: 'down',
        subtitle: 'vs previous month',
      },
      {
        title: 'Avg. Order Value',
        value: '$169',
        changePercent: 4.3,
        trend: 'up',
        subtitle: 'vs previous month',
      },
    ],
    salesData: [
      { month: 'Jan', amount: 3500, target: 3000 },
      { month: 'Feb', amount: 4200, target: 3500 },
      { month: 'Mar', amount: 3800, target: 4000 },
      { month: 'Apr', amount: 5100, target: 4500 },
      { month: 'May', amount: 4800, target: 5000 },
      { month: 'Jun', amount: 5800, target: 5500 },
    ],
    trafficData: [
      { source: 'Organic Search', visitors: 5624 },
      { source: 'Direct', visitors: 3580 },
      { source: 'Social Media', visitors: 2780 },
      { source: 'Referral', visitors: 1950 },
      { source: 'Email', visitors: 1280 },
    ],
    ordersData: [
      { id: 1001, customer: 'John Smith', date: new Date(2023, 10, 1), amount: 245.99, status: 1 },
      {
        id: 1002,
        customer: 'Sarah Johnson',
        date: new Date(2023, 10, 2),
        amount: 189.5,
        status: 2,
      },
      {
        id: 1003,
        customer: 'Michael Brown',
        date: new Date(2023, 10, 3),
        amount: 325.75,
        status: 3,
      },
      { id: 1004, customer: 'Emma Davis', date: new Date(2023, 10, 4), amount: 412.0, status: 1 },
      {
        id: 1005,
        customer: 'Robert Wilson',
        date: new Date(2023, 10, 5),
        amount: 178.25,
        status: 2,
      },
      {
        id: 1006,
        customer: 'Jennifer Taylor',
        date: new Date(2023, 10, 6),
        amount: 298.5,
        status: 4,
      },
      {
        id: 1007,
        customer: 'David Martinez',
        date: new Date(2023, 10, 7),
        amount: 543.99,
        status: 1,
      },
      {
        id: 1008,
        customer: 'Lisa Anderson',
        date: new Date(2023, 10, 8),
        amount: 176.5,
        status: 2,
      },
    ],
    orderStatuses: [
      { id: 1, name: 'Completed', color: 'green' },
      { id: 2, name: 'Processing', color: 'blue' },
      { id: 3, name: 'Pending', color: 'orange' },
      { id: 4, name: 'Cancelled', color: 'red' },
    ],
    lastUpdate: new Date(),
    isLoading: true,
  }),
  actions: {
    async fetchDashboardData() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this.lastUpdate = new Date();
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        this.isLoading = false;
      }
    },
    updateKpiData(newData: KpiItem[]) {
      this.kpiData = newData;
    },
    updateSalesData(newData: SalesDataItem[]) {
      this.salesData = newData;
    },
    updateTrafficData(newData: TrafficDataItem[]) {
      this.trafficData = newData;
    },
    updateOrdersData(newData: Order[]) {
      this.ordersData = newData;
    },
  },
});
