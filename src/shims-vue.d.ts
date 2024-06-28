declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
// 一定要添加export {} 不然会覆盖掉原来的
export {}

declare module 'vue' {
    interface ComponentCustomProperties {
        $message: any
    }
}
