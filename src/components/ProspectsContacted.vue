<script type="text/javascript">
	import VueStar from 'vue-star'
	import ModalRegisterContact from './ModalRegisterContact.vue'
	import ModalRegisterNewProspect from './ModalRegisterNewProspect.vue'

	export default {
		name:'prospects',
		data(){
			return {
				user: '',
				seeRegisterContact: false,
				seeRegisterNewProspect: false

			}
		},
		components:{
			VueStar,
			ModalRegisterContact,
			ModalRegisterNewProspect
		},
		methods:{
			showModalRegister(){
				this.seeRegisterContact = true
			},
			showModalRegisterNew(){
				this.seeRegisterNewProspect = true
			},
			addAsProspect(){
				this.$router.push('/agregar-prospecto')
			}
		}
	}
</script>
<style type="text/css">
	.see-more-btn{
		background: transparent;
	}
	

	.see-more-btn:hover{
		background: #2581bc !important;
		color:white !important;
	}
	
</style>


<template>
	<transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
		<section class="my-container">
		<ModalRegisterContact v-if="seeRegisterContact" @closeModalRegister="seeRegisterContact = false"></ModalRegisterContact>

		<ModalRegisterNewProspect v-if="seeRegisterNewProspect" @closeModalRegister="seeRegisterNewProspect = false"></ModalRegisterNewProspect>
			<article class="padding1em">
				<h2 class="margin-bottom5 color-darkblue">Nombre del vendedor</h2>
				<h3 class="font-normal color-darkblue">Selecciona la etapa a trabajar:</h3>
			</article>
			<article class="padding1em">
			slide here
			</article>
			<article class="padding1em">
				<p class="margin0 font1-3em color-black">Tu Prospección semanal</p>
			</article>

			<article class="padding10">

				<div class="flex back-white font1em my-box-shadow margin-bottom20">
					<article class=" widthHalf back-green text-center padding10" style="border-right:2px solid white;">
						<h2 class="font-normal color-white font1em margin-bottom5">Cumplimiento</h2>
						<h1 class="color-white font1-5em">100%</h1>

					</article>
					<article class="widthHalf back-green text-center padding10">
						<h2 class="font-normal color-white font1em margin-bottom5">Cotizaciones</h2>

						<h1 class=" color-white font1-5em">4/4</h1>
						
					</article>
					

				</div>

				<div class="flex back-white font1em my-box-shadow">
					<article class=" width100 back-lightred text-center padding10" style="border-right:2px solid white;">
						<h2 class="font-normal color-white font1em margin-bottom5">Total de ofertas</h2>
						<h1 class="color-white font1-5em">$123,230.00</h1>

					</article>
					
					

				</div>
			</article>

			<div class="margin-top20 margin-bottom20" style="border:1px solid white;"></div>

			<article class="padding1em">
				<p class="margin0 font1-3em color-black">Contactos realizados</p>

				<p class="margin0 font1-3em color-darkblue">Cuota de prospectos: <span class="font-bold">$1'234,434</span></p>
			</article>


			<article class="padding10">
				<section class="back-white margin-bottom20" v-for="i in 4">
					<article class="padding1em back-darkblue flex flex-middle">
						
						<p class="color-white rounded margin-right5 flex flex-center flex-middle" style="border:2px solid white; width:17px; height:17px;">
							<span style="width:10px; height:3px; background:white;"></span>
						</p>
						<p class="anchor font1-3em text-uppercase color-white" @click="addAsProspect">Cesar Chavez centenos</p>
					</article>
					<article class=" flex flex-between padding10">
						<div>
							<h2 class="font-normal text-center color-black font1em margin-bottom5">Venta estimada</h2>
							<h1 class="color-black font1-5em">$12,224</h1>
						</div>

						<div>
							<h2 class="font-normal text-center color-black font1em margin-bottom5">Última compra</h2>
							<h1 class="color-black font1-5em">12/nov/17</h1>
						</div>

						<div>
							<h2 class="font-normal text-center color-black font1em margin-bottom5">Contactado</h2>
							<h1 class="color-black font1-5em">
								<span class="ion-document-text color-black font1em"></span>12/nov/17</h1>
						</div>
					</article>

					<article class="padding10 flex flex-right">
						<button class="my-btn hvr-buzz-out back-blue flex flex-center" style="width:30% padding:1.3em 0; border-radius:8px;" @click="showModalRegister">
							<span class="ion-plus-circled margin-right5 color-white font1em"></span>
							<h3 class="color-white text-uppercase font1em">Contización</h3>
						</button>
					</article>
				</section>

				<button class="my-btn border2white width100 pointer see-more-btn text-uppercase color-black font-bold my-box-shadow">
										
							 <h3 class="font1em">Ver más</h3>
					</button>
				
			</article>

			<br>
			<br>

		</section>
	</transition>
</template>