/**
 * The index page uses a layout page that pulls in header and footer components
 */
import Link from 'next/link'
import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'
import { Button } from 'reactstrap';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "08:00", heat: 4000, noise: 2400, light: 2400 },
  { name: "10:00", heat: 3000, noise: 1398, light: 2210 },
  { name: "12:00", heat: 2000, noise: 9800, light: 2290 },
  { name: "14:00", heat: 2780, noise: 3908, light: 2000 },
  { name: "16:00", heat: 1890, noise: 4800, light: 2181 },
  { name: "18:00", heat: 2390, noise: 3800, light: 2500 },
];

export default class extends Page {

  render() {
    return (
      <Layout session={this.props.session}>
        <h2>About this project</h2>
        <Button color="danger">Danger!</Button>
        <ResponsiveContainer aspect={2}>
        <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
              type="monotone"
              dataKey="heat"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="noise" stroke="#82ca9d" />
          <Line type="monotone" dataKey="light" stroke="#fd825c" />
        </LineChart>
        </ResponsiveContainer>
        <p>
          You can find the source for this project on GitHub at <Link href="https://github.com/iaincollins/nextjs-starter"><a>https://github.com/iaincollins/nextjs-starter</a></Link>
        </p>
      </Layout>
    )
  }

}
