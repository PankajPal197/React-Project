import React from 'react'
import { BsArrowUpShort,BsArrowDownShort   } from 'react-icons/bs'
import { LineChart, Line, ResponsiveContainer }
    from 'recharts';
function Home() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
      
        ];
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h1>Welcome Arun</h1>
            </div>
            <div className='main-card'>
                <div className='card'>
                    <div className='inner-card'>
                        <h4>Sells Graph</h4>
                        <span>$8,451</span>
                        <h5><BsArrowUpShort  className='card-icon' />3.2%</h5>
                    </div>
                     
                    <div className='chart'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart width={300} height={100} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>
                <div className='card'>
                    <div className='inner-card'>
                        <h4>Total Visitors</h4>
                        <span>$3,973</span>
                        <h5 style={{ background:"red" }}><BsArrowDownShort   className='card-icon' />3.2%</h5>
                    </div>
                    <div className='chart'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart width={300} height={100} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='card'>
                    <div className='inner-card'>
                        <h4>New Users</h4>
                        <span>$7,333</span>
                        <h5><BsArrowUpShort  className='card-icon' />3.2%</h5>
                    </div>
                    <div className='chart'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart width={300} height={100} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>
                <div className='card'>
                    <div className='inner-card'>
                        <h4>Total Orders</h4>
                        <span>$48,973</span>
                        <h5 style={{ background:"red" }}><BsArrowUpShort  className='card-icon' />3.2%</h5>
                    </div>
                    <div className='chart'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart width={300} height={100} data={data}>
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className=''>
                <h3>Recent Orders Requested</h3>
            </div>
        </main>
    )
}

export default Home