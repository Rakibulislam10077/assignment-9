import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Chart = () => {
    const data = [
        {
            month: "Mar",
            investment: 500,
            sell: 441,
            revenue: 401
        },
        {
            month: "Apr",
            investment: 1430,
            sell: 1823,
            revenue: 500
        },
        {
            month: "May",
            investment: 900,
            sell: 1026,
            revenue: 2010
        },
        {
            month: "Jun",
            investment: 1500,
            sell: 1929,
            revenue: 405
        },
        {
            month: "Jul",
            investment: 1100,
            sell: 1201,
            revenue: 900
        },
        {
            month: "Aug",
            investment: 1500,
            sell: 1470,
            revenue: 1000
        }
    ];
    return (
        <LineChart className='chart' width={800} height={400} data={data} barGap={100}>
            <Line dataKey={'investment'} stroke="#8884d8" ></Line>
            <Line dataKey={'sell'} stroke="#82ca9d" ></Line>
            {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
            <XAxis dataKey={'month'}> </XAxis>
            <YAxis dataKey={'revenue'}></YAxis>
            <Tooltip width='400' height='400' dataKey={'sell'} />
        </LineChart>
    );
};
export default Chart;









