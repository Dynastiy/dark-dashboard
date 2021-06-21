<template>
    <!-- <div class="main" id="main"> -->
    <div>
        <div class="content">
            <!-- Analytics Section  -->
            <div class="analytics">
                <div class="d-lg-flex d-md-flex d-sm-block justify-content-between">
                        <div class="card w-100 mr-3">
                            <div class="card-body bg-white">
                                <h4 class="card-title">Total Transactions</h4>
                                <p class="card-text"> &#36; 300 </p>
                            </div>
                        </div>
                        
                        <div class="card w-100 mr-3">
                            <div class="card-body bg-white">
                                <h4 class="card-title">Total Users</h4>
                                <p class="card-text">3000</p>
                            </div>
                        </div>

                        <div class="card w-100 mr-3">
                            <div class="card-body bg-white">
                                <h4 class="card-title">Total Payments</h4>
                                <p class="card-text">&#36; 500</p>
                            </div>
                        </div>

                        <div class="card w-100">
                            <div class="card-body bg-white">
                                <h4 class="card-title">Total Subscriptions</h4>
                                <p class="card-text"> &#36; 200 </p>
                            </div>
                        </div>
                </div>
            </div>
            
            <!-- End of Analytics Section  -->

            <!-- Charts  -->
            <div class="charts card px-3 py-3">
                <h4 class="card-title">Charts Here</h4>
            </div>

            <!-- Transactions -->
            <div class="card transaction-card px-3 py-3">
                <h4 class="card-title">Transaction History</h4>
                <div class="transaction-table mt-3 table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
                             <tr>
                            <th scope="row">4</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
                             <tr>
                            <th scope="row">5</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
                             <tr>
                            <th scope="row">6</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>

</style>