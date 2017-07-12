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
          This is a starter <a href="https://zeit.co/blog/next">Next.js 2.0</a> project
          that shows how to put together a simple website with server and client
          side rendering powered by Next.js, which uses React.
        </p>
        <p>
          Like all Next.js projects it features automatic pre-fetching of templates
          with a ServiceWorker, renders pages both client and server side and live
          reloading in development. It also shows how to use features new in
          Next.js version 2.0 like integration with Express for custom route handling.
        </p>
        <p>
          There are practical examples with header, footer and layout files,
          how to add page-specific CSS and JavaScript and header elements,
          how to write code that does asynchronous data fetching, how to write
          different logic for fetching data on the client and server if you need
          to.
        </p>
        <p>
          It includes session support (with CSRF and XSS protection), email
          based sign-in sytem and integrates with Passport to support signing in
          with Facebook, Google, Twitter and other sites that support oAuth.
        </p>
        <p>
          All functionality works both client and server side - including
          without JavaScript support in the browser.
        </p>
        <h3>Examples</h3>
        <ul>
          <li><Link prefetch href="/helloworld"><a>HelloWorld</a></Link> - The simplest possible example</li>
          <li><Link prefetch href="/css"><a>CSS &amp; SCSS</a></Link> - Live CSS/SCSS reloading and page specific CSS and &lt;head&gt; tags</li>
          <li><Link prefetch href="/async"><a>Asynchronous data fetching</a></Link> - How to include data from an API or database</li>
          <li><Link prefetch href="/routing/?id=example" as="/route/example"><a>Custom routing</a></Link> - Handling custom routes with Express</li>
          <li><Link prefetch href="/auth/signin"><a>Authentication</a></Link> - Authentication via email and Facebook, Google+ and Twitter</li>
          <li><Link prefetch href="/clock"><a>Clock</a></Link> - A more advanced example from the Zeit wiki that uses &quot;next-redux-wrapper&quot;</li>
        </ul>
        <p>
          If you want to see how custom 404, 500 and other HTTP errors are handled take a look at pages/_error.js
        </p>
        <h3>Configuration</h3>
        <p>
          For information on how to build and deploy see <a href="https://github.com/iaincollins/nextjs-starter/blob/master/README.md">README.md</a>
        </p>
        <p>
          For tips on configuring authentication see <a href="https://github.com/iaincollins/nextjs-starter/blob/master/AUTHENTICATION.md">AUTHENTICATION.md</a>
        </p>
        <p>
          Almost all options you might want configure can be set by creating .env file which is read at startup. See <a href="https://github.com/iaincollins/nextjs-starter/blob/master/.env.default">.env.default</a> for an example with all the supported options.
        </p>
        <p>
          You can find the source for this project on GitHub at <Link href="https://github.com/iaincollins/nextjs-starter"><a>https://github.com/iaincollins/nextjs-starter</a></Link>
        </p>
      </Layout>
    )
  }

}
