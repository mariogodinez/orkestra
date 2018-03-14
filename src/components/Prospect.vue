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
						<h2 class="font-normal color-white font1em margin-bottom5">Prospectos agregados</h2>
						<h1 class="color-white font1-5em">$1'212,233</h1>

					</article>
					<article class="widthHalf back-gray text-center padding10">
						<h2 class="font-normal color-white font1em margin-bottom5">Meta de prospectos</h2>

						<h1 class=" color-white font1-5em">$1'400,000</h1>
						
					</article>
					

				</div>

				<div class="flex back-white font1em my-box-shadow">
					<article class=" widthHalf back-lightred text-center padding10" style="border-right:2px solid white;">
						<h2 class="font-normal color-white font1em margin-bottom5">Cumpl. planeación</h2>
						<h1 class="color-white font1-5em">18%</h1>

					</article>
					<article class="widthHalf back-lightred text-center padding10">
						<h2 class="font-normal color-white font1em margin-bottom5">Contactados</h2>

						<h1 class=" color-white font1-5em">3</h1>
						
					</article>
					

				</div>
			</article>

			<div class="margin-top20 margin-bottom20" style="border:1px solid white;"></div>

			<article class="padding1em">
				<p class="margin0 font1-3em color-black"><span class="ion-star color-yellow"></span> Prospectos agregados</p>
			</article>

			<article class="padding10 flex flex-center">
				<button class="my-btn back-blue hvr-buzz-out" style="width:70%; padding:1.3em 0; border-radius:8px;" @click="showModalRegisterNew">
					<h3 class="color-white text-uppercase">Registrar Prospecto</h3>
				</button>
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
							<h3 class="color-white text-uppercase font1em">Contacto</h3>
						</button>
					</article>
				</section>

				<button class="my-btn border2white width100 pointer see-more-btn text-uppercase color-black font-bold my-box-shadow">
										
							 <h3 class="font1em">Ver más</h3>
					</button>
				
			</article>

			<div class="margin-top20 margin-bottom20" style="border:1px solid white;"></div>

			<article class="padding1em">
				<p class="margin0 font1-3em color-black">Directorio de clientes hitóricos de la sucursal</p>
			</article>

			<article class="padding10">
				<section class="flex">
					<div class="my-select font1-3em back-white color-black margin5 width100" >
			            <select name="" id="" class="color-black">
			              <option value="" class="color-black">Ticket más alto</option>
			            </select>
			            <div class="my-select-icon color-black flex flex-middle">
			              <span class="ion-arrow-down-b"></span>
			            </div>
			         </div>

			         <div class="my-select font1-3em back-white color-black margin5 width100" >
			            <select name="" id="" class="color-black">
			              <option value="" class="color-black">3 a 4 meses</option>
			            </select>
			            <div class="my-select-icon color-black flex flex-middle">
			              <span class="ion-arrow-down-b"></span>
			            </div>
			         </div>
				</section>

				<section class="flex">
					<div class="my-select font1-3em back-white color-black margin5 width100" >
			            <select name="" id="" class="color-black">
			              <option value="" class="color-black">P. sin contacto</option>
			            </select>
			            <div class="my-select-icon color-black flex flex-middle">
			              <span class="ion-arrow-down-b"></span>
			            </div>
			         </div>

			         <div class="my-select font1-3em back-white color-black margin5 width100" >
			            <select name="" id="" class="color-black">
			              <option value="" class="color-black">Marcas</option>
			            </select>
			            <div class="my-select-icon color-black flex flex-middle">
			              <span class="ion-arrow-down-b"></span>
			            </div>
			         </div>
				</section>
				
			</article>

			<article class="padding10">
				<button class="my-btn border2white width100 pointer back-blue text-uppercase color-black font-bold">
					<h3 class="font1em color-white font1-5em"><span class="ion-search color-white"></span></h3>
				</button>
			</article>


			<article class="padding10">
				<section class="back-white margin-bottom20" v-for="i in 3">
					<article class=" back-gray relative flex flex-middle relative">
							<span class="absolute color-white" style="font-size:2em; top:-15px; left:-25px;">
								<vue-star animate="animated bounceIn" color="#ffb91a">
								    <i slot="icon" class="ion-android-star pointer"></i>
								</vue-star>
							</span>
							
							
						<div class="relative padding1em" style="left:50px; border-left:1px solid #f2f2f2;">
							<p class="anchor font1-3em text-uppercase color-darkblue">Cesar Chavez centenos</p>

							<p class="anchor font1em color-darkblue">cesarccntenos@gmail.com</p>
						</div>
						
					</article>
					<article class=" flex flex-center padding10">
						<div class="padding10-20  relative" style="left:-2em;">
							<h2 class="font-normal text-center color-black font1em margin-bottom5">Celular</h2>
							<h1 class="color-black font1-5em text-center">3331234222</h1>
						</div>

						<div class="padding10-20 relative" style="right:-2em;">
							<h2 class="font-normal text-center color-black font1em margin-bottom5">Ticket más alto</h2>
							<h1 class="color-black font1-5em text-center">$93,340</h1>
						</div>
					</article>

					<article class=" flex flex-center padding10">
						<div class="padding10-20  relative" style="left:-2em;">
							<h2 class="font-normal text-center color-black font1em margin-bottom5">Periodo sin compra</h2>
							<h1 class="color-black font1-5em text-center">4 meses</h1>
						</div>

						<div class="padding10-20 relative" style="right:-2em;">
							<h2 class="font-normal text-center color-black font1em margin-bottom5">Último contacto</h2>
							<h1 class="color-black font1-5em text-center">3 meses</h1>
						</div>
					</article>

					

					
				</section>

				<button class="my-btn border2white width100 pointer see-more-btn text-uppercase color-black font-bold my-box-shadow">
										
							 <h3 class="font1em">Ver más</h3>
					</button>
				
			</article>

			

			<br>
			<br>
			<br>

		</section>
	</transition>
</template>