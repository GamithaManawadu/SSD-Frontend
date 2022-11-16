const admin = [
  {
    title: 'Dashboard',
    link: '/admin/dashboard',
  },
  {
    title: 'Add Employee',
    link: '/admin/register',
  },
  {
    title: 'View All Employees',
    link: '/admin/users',
  },
];

const worker = [
  {
    title: 'View Message',
    link: '/worker/dashboard',
  },
  {
    title: 'Send A Message',
    link: '/worker/message',
  },
];

const manager = [
  {
    title: 'View Message',
    link: '/manager/dashboard',
  },
  {
    title: 'Send A Message',
    link: '/manager/message',
  },
  {
    title: 'Send A File',
    link: '/file-uploader',
  },
];

export { admin, manager, worker };
