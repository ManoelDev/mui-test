// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general v3.4.0',
    items: [
      { title: 'One', path: '/dashboard/one', icon: ICONS.dashboard },
      { title: 'Two', path: '/dashboard/two', icon: ICONS.ecommerce },
      { title: 'Three', path: '/dashboard/three', icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      {
        title: 'resumo',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },
      {
        title: 'atividades',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },

      {
        title: 'a receber',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },

      {
        title: 'a pagar',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },

      {
        title: 'financeiro',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },

      {
        title: 'administrativo',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },

      {
        title: 'Área virtual',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },

      {
        title: 'relatórios',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },

      {
        title: 'módulos',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },
      {
        title: 'ajuda',
        path: '/dashboard/user',
        icon: ICONS.dashboard,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },



      // {
      //   title: 'user',
      //   path: '/dashboard/user',
      //   icon: ICONS.user,
      //   children: [
      //     { title: 'Four', path: '/dashboard/user/four' },
      //     { title: 'Five', path: '/dashboard/user/five' },
      //     { title: 'Six', path: '/dashboard/user/six' },
      //   ],
      // },
    ],
  },
];

export default navConfig;
