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
			goBack(){
				this.$router.go(-1)
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
			<article class="">
				<div class="flex flex-middle width100">
					<div class="padding-right20 padding-left10">
						<p class="square30 pointer rounded back-blue flex flex-center flex-middle" style="border:2px solid white;" @click="goBack">
							<span class="color-white ion-arrow-left-b font1-5em relative" style="left:-1px;"></span>
						</p>
					</div>
					
					<article class=" back-gray width100 relative flex flex-middle relative">
						<span class="absolute color-white" style="font-size:2em; top:-28px; left:-25px;">
							<vue-star animate="animated bounceIn" color="#ffb91a">
							    <i slot="icon" class="ion-android-star pointer"></i>
							</vue-star>
						</span>
							
							
						<div class="relative padding1em" style="left:50px; border-left:1px solid #f2f2f2;">
							<h2 class=" font1em text-uppercase color-darkblue">Agregar como prospecto</h2>
						</div>
						
					</article>
				</div>
			</article>

			<article class="padding20 flex flex-middle">
				<div class="back-darkblue padding5 flex flex-center flex-middle" style="width:6em; border-radius:4px; flex:none;">
					<span class="font4em ion-person color-white"></span>
				</div>
				<div class="margin-left20">
					<h2 class="font2em color-darkblue">Juan Manuel Perez Ramirez</h2>
				</div>
			</article>

			<article class="padding10">
				<div class="back-white padding10 border-box">
					<h2 class="font1-5em margin-bottom15 color-darkblue font-normal">ID: ADR232</h2>
					<h2 class="font1-5em margin-bottom15 color-darkblue font-normal">Celular: <span class="anchor">321 235 435</span></h2>

					<h2 class="font1-5em margin-bottom15 color-darkblue font-normal"><span class="anchor">anglor34@gmail.com</span></h2>

					<h2 class="font1-5em margin-bottom15 color-darkblue font-normal">Fecha de nacimiento: 16/Ene/2018</h2>

				</div>
			</article>

			<article class="flex padding5">
				<div class="my-select font1-3em back-white color-black margin5 width100" >
		            <select name="" id="" class="color-black">
		              <option value="" class="color-black">Género</option>
		            </select>
		            <div class="my-select-icon color-black flex flex-middle">
		              <span class="ion-arrow-down-b"></span>
		            </div>
		         </div>
		         <div class="my-select font1-3em back-white color-black margin5 width100" >
		            <select name="" id="" class="color-black">
		              <option value="" class="color-black">Talla</option>
		            </select>
		            <div class="my-select-icon color-black flex flex-middle">
		              <span class="ion-arrow-down-b"></span>
		            </div>
		         </div>
			</article>

			<article class="padding10 ">
				<button class="my-btn border2white width100 pointer back-blue text-uppercase color-black font-bold">
					<h3 class="font1em color-white font1-5em">Agregar contacto</h3>
				</button>
			</article>

			<article class="padding-top20">
				<div class="padding0-10">
	                <h3 class="font-normal font1-3em color-darkblue">Última visita/ contacto</h3>
	            </div>

	            <div class="padding10">
	            	<article class="back-white border-box padding10 flex flex-middle">
	            		<h3 class="color-darkblue">1/ENE/18</h3>
	            		<div class="flex flex-middle margin-left50">
	            			<div class="square20 rounded back-green"></div>
	            			<h3 class="color-darkblue margin-left10">0 meses</h3>
	            		</div>
	            		
	            	</article>
	            		
	            </div>

			</article>

			<article class="padding-top20">
				<div class="padding0-10">
	                <h3 class="font-normal font1-3em color-darkblue">Última compra</h3>
	            </div>

	            <div class="padding10">
	            	<article class="back-white border-box padding10 flex flex-middle">
	            		<h3 class="color-darkblue">1/ENE/18</h3>
	            		<div class="flex flex-middle margin-left50">
	            			<div class="square20 rounded back-green"></div>
	            			<h3 class="color-darkblue margin-left10">0 meses</h3>
	            		</div>
	            	</article>
	            </div>
			</article>


			<article class="padding-top20">
				<div class="padding0-10">
	                <h3 class="font-normal font1-3em color-darkblue">Total comprado</h3>
	            </div>

	            <div class="padding10">
	            	<article class="back-white border-box padding10 flex flex-middle">
	            		<h3 class="color-darkblue">$121,324</h3>
	            	</article>
	            </div>
			</article>

			<article class="padding-top20">
				<div class="padding0-10">
	                <h3 class="font-normal font1-3em color-darkblue">Ticket más alto</h3>
	            </div>

	            <div class="padding10">
	            	<article class="back-white border-box padding10 flex flex-middle">
	            		<h3 class="color-darkblue">$81,324</h3>
	            	</article>
	            </div>
			</article>

			<article class="padding-top20">
				<div class="padding0-10">
	                <h3 class="font-normal font1-3em color-darkblue">Tiempo estimado para compra</h3>
	            </div>
	            <div class="padding10">
	            	<article class=" flex">
	            		<div class="my-select font1-3em back-white color-black margin5 width100" >
				            <select name="" id="" class="color-black">
				              <option value="" class="color-black">Selecciona</option>
				            </select>
				            <div class="my-select-icon color-black flex flex-middle">
				              <span class="ion-arrow-down-b"></span>
				            </div>
				         </div>
	            	</article>
	            </div>
			</article>


			<article class="padding-top20">
				<div class="padding0-10">
	                <h3 class="font-normal font1-3em color-darkblue">Promedio de compra</h3>
	            </div>

	            <div class="padding10">
	            	<article class="back-white border-box padding10 flex flex-middle">
	            		<h3 class="color-darkblue">$89,324</h3>
	            	</article>
	            </div>
			</article>


			<article class="padding-top20">
				<div class="padding0-10">
	                <h3 class="font-normal font1-3em color-darkblue">Sucursales</h3>
	            </div>

	            <div class="padding10">
	            	<article class="back-white border-box padding10 flex flex-middle">
	            		<h3 class="color-darkblue">16, </h3>
	            		<h3 class="color-darkblue">28</h3>
	            	</article>
	            </div>
			</article>


			<div class="margin-top20 margin-bottom20" style="border:1px solid white;"></div>

			<div class="padding0-10 margin-bottom20">
                <h3 class="font-normal font1-5em color-darkblue">Historial de compras:</h3>
            </div>

            <section class="padding10">
            	<article class="flex margin-bottom20" v-for="i in 5">
	            	<figure class="" style="width:150px;">
	            		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAM1BMVEW8vsDn6Onq6+y5u73CxMbIycvh4uPW2NnR09Tc3d/AwsTk5ebU1dfg4eK9v8HBw8XMzc+TddevAAADGElEQVR4nO3c63KqMBRAYZINKiLo+z/tEblIMKng8cJO1venMx1xWEOKQUKzDAAAAAAAAAAAAAAAAAASJ9IUhcivd+Pb5FDZq7pIq7yprbmxp5TCZWcGKYXLyZp7ePHr3fkaMVP7ZA54YZ3wZLoPTrfNf70/3zLrPv56f74l1XHeJHpeS/VzLJMquXlLV5ncPFX6zv66pOyvS46HuPOltJc+XLKi6I9+JvXw6zhds6/nsYfC23kujze8zTaP4d3p3UYb3mU/fHLJvv91pOFj9nyiInXM4eNhfZyfxRwul2B2G24iDZf+GiwwTxm+iYgtfDzaoelZE2X4k6Pduod/c8c+65rd+Wsy3pjuNSai8Kb/uWQMN83z1wDAtxSftN3zvFT2g7b7vevkNucH0L01dNNNN910x9f9rtmKsu5T/ia1qm77rvt8UtJN98bQPe+Wm1feUnV3c6qryuzP6/dcc7cUxr46+jV35+PkY/1qDs3d5m71XSDF3Zfpqsy1O6+3e7LnrXS6q2m2f/FxuCiWbuO96xe+T6q42xnnlW+VRxlem6u32zmv+b78b9dCVMG31NvtDHTPMD/awGqf28Z6u5/MW7qNQiNdc7fk1a3cGl/2sAbfX6W5u/0TLo0tD75thsEQmLvr7u4vRH2bjH/8/ims9u7QFpMPOd9HXFTdk1P99Ikq7yqviLqlGkd08/TBwYi6d+PSPKmNwzPSo+nulmPfwsV9XtI70mPpHlaht+HnWbZvpEfSLeNkPZ89BR4Y6XF037OvhfuHw+0Z6XF055NU97I8NNKj6D56U1272Q2HGLoXZD/M7PV3L1wN4X4Dp7978SIQZ6Sr7/aevv0H3Ll2V969PNsd6cq75bI82xnpurvXZQe+hVbYveSD2wkfR7rq7vPK7MlI19wt/inpnwd82F5x90urN+2531htt5Qvrc+spd9aa/ewmGmtflvF3f/1lnTTvTV0p9pt3tata919ss9ZfADdW0M33XTTTXck3Yn+X4vs/K6nQn2S+bfZAAAAAAAAAAAAAAAAAAAAAAAAAAAAANL0D2K5KQJNX8MVAAAAAElFTkSuQmCC" class="width100">
	            	</figure>
	            	<div class="margin-left15">
	            		<h3 class="color-darkblue">Nombre del producto</h3>
	            		<h3 class="font-normal color-darkblue">Modelo: AP3435</h3>

	            		<h3 class="font-normal color-darkblue">Color:  blanco</h3>

	            		<h3 class="color-darkblue">$1,549.00 mxn</h3>

	            	</div>
	            </article>
            </section>

            
            <article class="padding10">
            	<button class="my-btn border2white width100 pointer see-more-btn text-uppercase color-black font-bold my-box-shadow">
					<h3 class="font1em">Ver más</h3>
				</button>
            </article>
            

            <section class="padding10 back-white">
            	<article class=" padding10 flex flex-middle flex-between">
            		<h3 class="font-normal font1-5em color-darkblue">Sugerencias rápidas:</h3>
            		<button class="my-btn border2white pointer back-blue text-uppercase color-black font-bold my-box-shadow" style="width:45%">
						<h3 class="font1em color-white">Ver más sugerencias</h3>
					</button>
            	</article>
            	<section class="padding10" v-for="i in 5">
            		<article class="flex margin-bottom10" >
		            	<figure class="" style="width:150px;">
		            		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAM1BMVEW8vsDn6Onq6+y5u73CxMbIycvh4uPW2NnR09Tc3d/AwsTk5ebU1dfg4eK9v8HBw8XMzc+TddevAAADGElEQVR4nO3c63KqMBRAYZINKiLo+z/tEblIMKng8cJO1venMx1xWEOKQUKzDAAAAAAAAAAAAAAAAAASJ9IUhcivd+Pb5FDZq7pIq7yprbmxp5TCZWcGKYXLyZp7ePHr3fkaMVP7ZA54YZ3wZLoPTrfNf70/3zLrPv56f74l1XHeJHpeS/VzLJMquXlLV5ncPFX6zv66pOyvS46HuPOltJc+XLKi6I9+JvXw6zhds6/nsYfC23kujze8zTaP4d3p3UYb3mU/fHLJvv91pOFj9nyiInXM4eNhfZyfxRwul2B2G24iDZf+GiwwTxm+iYgtfDzaoelZE2X4k6Pduod/c8c+65rd+Wsy3pjuNSai8Kb/uWQMN83z1wDAtxSftN3zvFT2g7b7vevkNucH0L01dNNNN910x9f9rtmKsu5T/ia1qm77rvt8UtJN98bQPe+Wm1feUnV3c6qryuzP6/dcc7cUxr46+jV35+PkY/1qDs3d5m71XSDF3Zfpqsy1O6+3e7LnrXS6q2m2f/FxuCiWbuO96xe+T6q42xnnlW+VRxlem6u32zmv+b78b9dCVMG31NvtDHTPMD/awGqf28Z6u5/MW7qNQiNdc7fk1a3cGl/2sAbfX6W5u/0TLo0tD75thsEQmLvr7u4vRH2bjH/8/ims9u7QFpMPOd9HXFTdk1P99Ikq7yqviLqlGkd08/TBwYi6d+PSPKmNwzPSo+nulmPfwsV9XtI70mPpHlaht+HnWbZvpEfSLeNkPZ89BR4Y6XF037OvhfuHw+0Z6XF055NU97I8NNKj6D56U1272Q2HGLoXZD/M7PV3L1wN4X4Dp7978SIQZ6Sr7/aevv0H3Ll2V969PNsd6cq75bI82xnpurvXZQe+hVbYveSD2wkfR7rq7vPK7MlI19wt/inpnwd82F5x90urN+2531htt5Qvrc+spd9aa/ewmGmtflvF3f/1lnTTvTV0p9pt3tata919ss9ZfADdW0M33XTTTXck3Yn+X4vs/K6nQn2S+bfZAAAAAAAAAAAAAAAAAAAAAAAAAAAAANL0D2K5KQJNX8MVAAAAAElFTkSuQmCC" class="width100">
		            	</figure>
		            	<div class="margin-left15">
		            		<h3 class="color-darkblue">Nombre del producto</h3>
		            		<h3 class="font-normal color-darkblue">Modelo: AP3435</h3>

		            		<h3 class="font-normal color-darkblue">Color:  blanco</h3>

		            		<h3 class="color-darkblue">$1,549.00 mxn</h3>

		            	</div>
		            	
		            </article>
		            <div class="flex">
	            		<div class="border2 margin-right15 color-blue padding10 widthHalf" style="border-radius:4px;">
	            			<h3 class="text-uppercase font1em text-center">Descargar imagen</h3>
	            		</div>

	            		<div class="border2 color-blue padding10 widthHalf" style="border-radius:4px;">
	            			<h3 class="text-uppercase font1em text-center">Enviar sugerencia</h3>
	            		</div>
	            	</div>
            	</section>

            	<article class="padding10">
	            	<button class="my-btn border2white width100 pointer see-more-btn text-uppercase color-black font-bold my-box-shadow">
						<h3 class="font1em">Ver más</h3>
					</button>
	            </article>
            </section>


            <section class="padding-top20">
            	<div class="padding10 margin-bottom20">
	                <h1 class="font-normal font1-5em color-darkblue">Perfil de compra</h1>
	            </div>

	            <div class="padding0-10">
	            	<h3 class="font-normal font1-3em color-darkblue">Marcas compradas</h3>
	            </div>

            	<article class=" padding10 margin-bottom20">
            		<div class="back-white border-box padding10-20">
            			<h3 class="margin10 font-normal" v-for="i in 3">Marca {{i}}</h3>
            		</div>
            	</article>

            	<div class="padding0-10">
	            	<h3 class="font-normal font1-3em color-darkblue">Categorías compradas</h3>
	            </div>

            	<article class=" padding10">
            		<div class="back-white border-box padding10-20">
            			<h3 class="margin10 font-normal" v-for="i in 3">Categoría {{i}}</h3>
            		</div>
            	</article>
            </section>

            <div class="margin-top20 margin-bottom20" style="border:1px solid white;"></div>

            <div class="padding10 margin-bottom20">
                <h1 class="font-normal font1-5em color-darkblue">Modenero electrónico</h1>
            </div>

            <article class=" padding10 flex flex-middle flex-between">
            	<div class="width100 margin-right20">
            		<h3 class="font-normal margin-bottom5 font1-3em color-darkblue">Saldo en monedero</h3>
            		<div class="back-white border-box padding5 ">
	        			<h3 class="margin5 font-normal">$0.00</h3>
	        		</div>
            	</div>
        		

            	<div class="width100">
            		<h3 class="font-normal margin-bottom5 font1-3em color-darkblue">Nivel</h3>
            		<div class="back-white border-box padding5 ">
	        			<h3 class="margin5 font-normal">Oro</h3>
	        		</div>
            	</div>
        		
        	</article>

        	<article class=" padding10 flex flex-middle flex-between">
            	<div class="width100 margin-right20">
            		<h3 class="font-normal margin-bottom5 font1-3em color-darkblue">Monto p/ subir de nivel</h3>
            		<div class="back-white border-box padding5 ">
	        			<h3 class="margin5 font-normal">$10,000.00</h3>
	        		</div>
            	</div>
        		

            	<div class="width100">
            		<h3 class="font-normal margin-bottom5 font1-3em color-darkblue">Periodo</h3>
            		<div class="back-white border-box padding5 ">
	        			<h3 class="margin5 font-normal">12/Ene/16 - 12/Ene/17</h3>
	        		</div>
            	</div>
        		
        	</article>

        	<div class="margin-top20 margin-bottom20" style="border:1px solid white;"></div>

        	<div class="padding10 margin-bottom20">
                <h1 class="font-normal font1-5em color-darkblue">Registro de contacto</h1>
            </div>

            <section class="padding10">
            	<article class="margin-bottom20" v-for="i in 4">
            		<div class="back-lightgray padding10">
            			<section class="flex flex-middle flex-between">
            				<div>
            					<h3 class="font1-3em color-darkblue">
            						Contacto:
            						<span class="ion-social-whatsapp-outline color-green"></span>
            						<span class="font-normal">Whatsapp</span>
            					</h3>
            				</div>
            				<div>
            					<h3 class="font1-3em color-darkblue"><span class="ion-checkmark-circled color-green"></span> Vendido</h3>
            				</div>
            			</section>
            			<section>
            				<article class="padding-top10">
            					<h3 class="color-gray font-normal">
            						<span class="margin-right15">12/ENE/18</span>
            						<span>18:20 hrs</span>
            					</h3>
            				</article>
            			</section>
            		</div>

            		<div class="back-white padding10">
            			<div class="margin-bottom10">
        					<h3 class="font1-3em color-darkblue">
        						Vendedor:
        						<span class="font-normal">Cesar Huerta Ramos</span>
        					</h3>
        				</div>

        				<div class="margin-bottom15">
        					<h3 class="font1-3em color-darkblue">
        						Asunto:
        						<span class="font-normal">Felicitación por su cumpleaños</span>
        					</h3>
        				</div>

        				<div class="margin-bottom15" style="width:50%;">
        					<button class="my-btn border2white width100 pointer back-green text-uppercase color-black font-bold" style="box-shadow:0 0 10px #999;">
								<h3 class="font1em color-white font1-5em">Evidencia</h3>
							</button>
        				</div>

        				<div class="margin-bottom5">
        					<h3 class="font1-3em color-darkblue">
        						Resúmen:
        					</h3>
        				</div>

        				<div class="">
        					<p class="font1-3em color-darkblue">
        						Lorem ipsum dolor sit amet, consectetur adipisicing elui officia deserunt mollit anim id est laborum.
        					</p>
        				</div>
            		</div>
            	</article>

            	<article class="padding10">
	            	<button class="my-btn border2white width100 pointer see-more-btn text-uppercase color-black font-bold my-box-shadow">
						<h3 class="font1em">Ver más</h3>
					</button>
	            </article>
            </section>



			<br><br>
		</section>
	</transition>
</template>