<template>
     <section class="about py-5" id="about">
          
          <div class="container-lg py-4">
               <div class="row justify-content-center">
                    <div class="col-lg-8">
                         <div class="section-title text-center">
                              <h2 class="fw-bold mb-5">About Me</h2>
                         </div>
                    </div>
               </div>
               <div class="row">
                    <div class="col-md-6">
                         <div class="about-text">
                              <h3 class="fs-4 mb-3">Fatomi Abiodun M. (B.Tech)</h3>
                              <p class="text-muted">I am a junior software developer with experience in product design and front-end development. I presently enrolled in <b>Enyata Academy</b>I like networking with people who share my interests, and I see myself contributing and providing more technological solutions in the coming years to make science and technology more efficient, reproducible, and sustainable.</p>
                         </div>
                         <div class="row text-center text-uppercase my-3">
                              <div class="col-sm-4">
                                   <div class="fact-item">
                                        <h4 class="fs-1 fw-bold">06</h4>
                                        <p class="text-muted">Projects Completed</p>
                                   </div>
                              </div>
                              <div class="col-sm-4">
                                   <div class="fact-item">
                                        <h4 class="fs-1 fw-bold">06</h4>
                                        <p class="text-muted">Happy clients</p>
                                   </div>
                              </div>
                              <div class="col-sm-4">
                                   <div class="fact-item">
                                        <h4 class="fs-1 fw-bold">05</h4>
                                        <p class="text-muted">Positive Reviews</p>
                                   </div>
                              </div>
                         </div>
                         <div class="row">
                              <div class="col-lg-12 d-flex align-items-center">
                                   <router-link :to='{ name: "enyata-say"}'><a href="#" class="btn px-3 btn-danger me-5">About Enyata</a></router-link>
                                   <div class="social-links">
                                        <a href="https://web.facebook.com/fatomi.abiodun" target="_blank" class="text-dark me-2"><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://twitter.com/fatomi_abiodun" target="_blank"  class="text-dark me-2"><i class="fab fa-twitter"></i></a>
                                        <a href="https://www.linkedin.com/in/fatomi-abiodun-886598137/" target="_blank" class="text-dark me-2"><i class="fab fa-linkedin-in"></i></a>
                                        <a href="https://github.com/Fatomi96" target="_blank" class="text-dark me-2"><i class="fab fa-github"></i></a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="col-md-6 mt-5 mt-md-0">
                         <div class="skill-item mb-4">
                              <h3 class="fs-6">HTML</h3>
                              <div class="progress" style="height: 5px;">
                                   <div class="progress-bar bg-danger" role="progressbar" style="width: 78%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                         <div class="skill-item mb-4">
                              <h3 class="fs-6">CSS</h3>
                              <div class="progress" style="height: 5px;">
                                   <div class="progress-bar bg-danger" role="progressbar" style="width:62%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                         <div class="skill-item mb-4">
                              <h3 class="fs-6">Bootstrap</h3>
                              <div class="progress" style="height: 5px;">
                                   <div class="progress-bar bg-danger" role="progressbar" style="width: 55%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                         <div class="skill-item">
                              <h3 class="fs-6">UI/UX Design</h3>
                              <div class="progress" style="height: 5px;">
                                   <div class="progress-bar bg-danger" role="progressbar" style="width: 60%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <router-view />
     </section>
</template>

<script>
export default {

}
</script>

<style>

</style>