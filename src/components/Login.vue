<script>
	// import ModalError from './ModalError.vue'
	import Spinner from './Spinner.vue'

	export default {
		components:{
			// ModalError,
			Spinner
		},
		data(){
			return {
				spin: false,
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				userInfo: {
					user: 'cacer',
					password: '1234'
				},
				pass:{
					user: 'cacer',
					code: '1234'
				},
				errorMessage: 'Las credenciales no coinciden.',
				error: false

			}
		},
		computed:{
			logged(){
				return this.$store.getters.logged
			},
			url(){
				return window.url
			}

		},
		methods: {
			showInfo(){
				let self = this
				setTimeout(function(){
					self.show1 = true
				},300)

				setTimeout(function(){
					self.show2 = true
				},1000)

				setTimeout(function(){
					self.show3 = true
				},1500)

				setTimeout(function(){
					self.show4 = true
				},1900)

				setTimeout(function(){
					self.show5 = true
				},2300)
				
			},
			login(){
				let self = this
				// self.spin = true

				axios.post(apiUrl + '/auth/login',
					{email:'c.torres@unexpect.mx', password:'holaadmin'})
					.then(res => {
						console.log(res)
					})
					.catch(err => {
						console.log(err.response)
					})

				return false


				setTimeout(function(){
					if(self.pass.user == self.userInfo.user && self.pass.code == self.userInfo.password){
						self.$router.push('/indicadores-vendedor')
						localStorage.tokenOrkestra ='3gv635w64'
						self.$store.dispatch('setLogged', true)
						self.spin = false
					} else {
						self.spin = false
						// mostrar modal
					}
						
				},3500)
			}
		},
		mounted(){
			this.showInfo()
		}
	}
</script>

<template class="padding0">
	<section class="back-darkblue height100vh padding0" style="overflow-y:hidden !important; padding-top: 0px !important;">
	<Spinner v-if="spin"></Spinner>
	<ModalError v-if="error" :errorMessage="errorMessage" @closeModal="error = false"></ModalError>

		<article class="font1-3em flex flex-center relative flex-middle back-pattern height100" style="top:-40px;">
			
				<article class="login">

					<transition appear name="custom-classes-transition" appear-active-class="animated flip" enter-active-class="animated flip" leave-active-class="">
						<div class="margin-bottom50" v-if="show1">
							<figure class="center-block" style="width: 300px;">
								<img class="width100" src="./dist/img/logo-white.png" alt="Orkestra logo">
							</figure>
						</div>
					</transition>
					<div id="login-form" class="flex flex-column flex-middle flex-center">
						<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="">
							<div class="relative center-block margin-bottom15" v-if="show2">
								<input type="text"
								class="padding-left35 my-input text-center back-white margin-bottom25 color-black"
								  v-model="userInfo.user" placeholder="Usuario" style="width: 300px; ">
							</div>
						</transition>
						<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="">
							<div class="relative center-block margin-bottom15" v-if="show3">
								
								<input type="text"
								class="padding-left35 my-input text-center back-white  color-black"
								placeholder="No. de vendedor" style="width: 300px">
							</div>
						</transition>

						<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="">
							<div class="relative center-block margin-bottom30" v-if="show4">
								
								<input type="password"
								class="padding-left35 my-input text-center back-white  color-black"
								 v-model="userInfo.password" placeholder="Contraseña" style="width: 300px">
							</div>
						</transition>
						<transition appear name="custom-classes-transition" appear-active-class="animated flipInX" enter-active-class="animated flipInX" leave-active-class="">
							<div class="relative margin-bottom30 width100" v-if="show5">
								<button class="my-btn border2white width100 pointer back-blue text-uppercase color-black font-bold"
						  @click="login">
									
									 <h3 class="font1em color-white">Iniciar sesión</h3>
								</button>
								
							</div>
						</transition>
						

					</div>

					<!-- <div class="password-actions flex flex-column flex-middle margin20">
						<router-link to="" class="anchor color-yellow margin-bottom10">
							Olvidé mi contraseña
						</router-link>
					</div> -->
				</article>
		</article>
	</section>
</template>


<style>

</style>
