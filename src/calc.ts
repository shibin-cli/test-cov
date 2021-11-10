// 计算日期月数差
export default function calc(d1: string, d2: string) {
    //TODO
    const date1 = new Date(d1.replace(/\-/g, '/'))
    const date2 = new Date(d2.replace(/\-/g, '/'))
    return Math.abs(
        (date1.getFullYear() - date2.getFullYear()) * 12 +
        date1.getMonth() - date2.getMonth()
    )
}
