
export default{
    path : '/page3',
    component : () => import('@/views/page3'),
    children:[
        {
            path:'m1',
            component: ( ) => import('@/components/modules/m1')
        },
        {
            path:'m2',
            component: () => import('@/components/modules/m2')
        },
    ]
}
