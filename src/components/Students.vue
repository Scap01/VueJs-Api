
<template class="gb-light">
 <div class="container bg-light">
      <h1>students</h1>
      <input type="text" v-model.trim="search">
    <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center" v-for="student in students   " v-bind:key="student.id">
            <div class="col-xl-6 col-md-15">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-3 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-10"> <img :src="student.pic" class="rounded-circle border" alt="User-Profile-Image" width="100" height="100"> </div>
                                
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="card-block">
                                <p class="fs-1">{{student.firstName}} {{student.lastName}}</p> <br />
                                <div class="row text-start">

                                    
                                        <p class="m-b-10 f-w-600">Email <span class="text-muted ">{{student.email}} </span></p>
                                    
                                        <p class="m-b-10 f-w-600">Compagny <span class="text-muted ">{{student.company}} </span></p>

                                        <p class="m-b-10 f-w-600">Skill <span class="text-muted ">{{student.skill}} </span></p>

                                        <p class="m-b-10 f-w-600">Average 


                                                <span> {{avg(student)}}%</span> 
                                            
                                        </p>
                                    
                                </div>
                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'Students',
        methods:{
            
            avg(subItem)
            {
                var total = 0,
                length = subItem.grades.length;

            for (var i = 0; i < length; i++) {
                total += parseFloat(subItem.grades[i]);
            }

            console.log(total / length)

            return (total / length);
            }
        },
        data(){
            return{
                students: null,
                search: "",
            };
        },
        mounted: function() {
            axios.get('https://api.hatchways.io/assessment/students')
            .then(res => {
                this.students = res.data.students;
            })
        },
        computed: {
            filterStudent: function (){
                return (this.students.filter(student => student.firstName.includes(this.search)))
            }
        }
        
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
    background-color: #f9f9fa
}

.padding {
    padding: 3rem !important
}

.user-card-full {
    overflow: hidden
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
    box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
    border: none;
    margin-bottom: 30px
}

.m-r-0 {
    margin-right: 0px
}

.m-l-0 {
    margin-left: 0px
}

.user-card-full .user-profile {
    border-radius: 5px 0 0 5px
}

.bg-c-lite-green {
    background: -webkit-gradient(linear, left top, right top, from(#ffffff), to(#ffffff));
    background: linear-gradient(to right, #ffffff, #ffffff)
}

.user-profile {
    padding: 20px 0
}

.card-block {
    padding: 1.25rem
}

.m-b-25 {
    margin-bottom: 25px
}

.img-radius {
    border-radius: 5px
}

h6 {
    font-size: 14px
}

.card .card-block p {
    line-height: 25px
}

@media only screen and (min-width: 1400px) {
    p {
        font-size: 14px
    }
}

.card-block {
    padding: 1.25rem
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0
}

.m-b-20 {
    margin-bottom: 20px
}

.p-b-5 {
    padding-bottom: 5px !important
}

.card .card-block p {
    line-height: 25px
}

.m-b-10 {
    margin-bottom: 10px
}

.text-muted {
    color: #919aa3 !important
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0
}

.f-w-600 {
    font-weight: 600
}

.m-b-20 {
    margin-bottom: 20px
}

.m-t-40 {
    margin-top: 20px
}

.p-b-5 {
    padding-bottom: 5px !important
}

.m-b-10 {
    margin-bottom: 10px
}

.m-t-40 {
    margin-top: 20px
}

.user-card-full .social-link li {
    display: inline-block
}

.user-card-full .social-link li a {
    font-size: 20px;
    margin: 0 10px 0 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out
}

</style>
