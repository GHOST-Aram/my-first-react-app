export const tasks = [
    {
        id: 1,
        text: 'Meeting at Noon',
        day: 'April 17th 2023',
        reminder: false,
    },
    {
        id: 2,
        text: 'Shopping Mall',
        day: 'April 18th 2023',
        reminder: true,
    },
    {
        id: 3,
        text: 'Play Chess',
        day: 'April 12th 2023',
        reminder: true,
    },
    {
        id: 4,
        text: 'Read Good Book',
        day: 'April 11th 2023',
        reminder: true,
    },
]
export const fetchData = async () => {
    const res = await fetch('http://localhost:5000/tasks')

    const data = await res.json()
    
    return  data
}