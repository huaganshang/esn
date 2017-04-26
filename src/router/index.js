import App from '../app';
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                meta: { auth: false },
                component: resolve => require(['../view/index'], resolve)
            },
            {
                path: '/detail',
                component: resolve => require(['../view/detail'], resolve)
            },
            {
                path: '*',
                redirect: '/index'
            },
        ]
    }
];
