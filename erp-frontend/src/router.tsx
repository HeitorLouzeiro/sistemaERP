import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// ========================
// Auth Pages
// ========================
const SignIn = Loader(lazy(() => import('src/content/pages/Auth/SignIn')));

// ========================
// Groups Pages
// ========================
const Groups = Loader(lazy(() => import('src/content/pages/Groups/Groups')));
const AddGroup = Loader(lazy(() => import('src/content/pages/Groups/Add')));
const EditGroup = Loader(lazy(() => import('src/content/pages/Groups/Edit')));

// ========================
// Employees Pages
// ========================
const Employees = Loader(lazy(() => import('src/content/pages/Employees/Employees')));
const AddEmployee = Loader(lazy(() => import('src/content/pages/Employees/Add')));
const EditEmployee = Loader(lazy(() => import('src/content/pages/Employees/Edit')));

// ========================
// Tasks Pages
// ========================
const TasksPage = Loader(lazy(() => import('src/content/pages/Tasks/Tasks')));
const AddTask = Loader(lazy(() => import('src/content/pages/Tasks/Add')));
const EditTask = Loader(lazy(() => import('src/content/pages/Tasks/Edit')));

// ========================
// Status Pages
// ========================
const Status404 = Loader(lazy(() => import('src/content/pages/Status/Status404')));

// ========================
// Routes Configuration
// ========================
const routes: RouteObject[] = [
  // Public Routes (BaseLayout)
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/',
        element: <Navigate to="/tasks" replace />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },

  // Protected Routes (SidebarLayout)
  // Groups Management
  {
    path: 'groups',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Groups />
      },
      {
        path: 'add',
        element: <AddGroup />
      },
      {
        path: 'edit/:id',
        element: <EditGroup />
      }
    ]
  },

  // Employees Management
  {
    path: 'employees',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Employees />
      },
      {
        path: 'add',
        element: <AddEmployee />
      },
      {
        path: 'edit/:id',
        element: <EditEmployee />
      }
    ]
  },

  // Tasks Management
  {
    path: 'tasks',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <TasksPage />
      },
      {
        path: 'add',
        element: <AddTask />
      },
      {
        path: 'edit/:id',
        element: <EditTask />
      }
    ]
  }
];

export default routes;
