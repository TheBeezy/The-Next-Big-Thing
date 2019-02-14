import Layout from '../components/Layout.js'

export default () => (

    <Layout>
        <h1>Review Pages</h1>
        <div class="container">
        <table class="table table-striped">
        <thead>
            <tr>
                <th>Book</th>
                <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rating</th>

            </tr>
        </thead>
        <tbody>
            <tr class="Brand">
                 <td>Calculus Book</td>
                 <td>
                     <div class="stars-Outer">
                     <div class="stars-inner"></div>
                     </div>
                     <span class="number-rating"></span>
                 </td>
            </tr>
        </tbody>
        </table>

        </div>

    </Layout>
)

