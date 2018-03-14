<script type="text/javascript">

	export default {
		name:'Cuotas',
		data(){
			return {
				user: '',
				seeRegisterContact: false,
				seeRegisterNewProspect: false

			}
		},
		components:{
		},
		methods:{
			
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
			<article class="padding1em">
				<h2 class="margin-bottom5 color-darkblue">Cuotas</h2>
				<h3 class="font-normal color-darkblue">Asigna el porcentaje de ventas a cada vendedor.</h3>
			</article>

			<article class="padding10">
				<div class="back-darkblue font1em my-box-shadow flex flex-middle">
					<h2 class="font-normal font1-3em color-white padding-left20 ">Cuota mensual</h2>
					<div class="margin-left20 padding20" style="border-left:2px solid #435b72; height:100%;">
						<h2 class="font-normal color-white font1em">Febrero</h2>
						<h2 class="font-normal color-white font1-3em">$8'800,00.00</h2>
					</div>
				</div>
			</article>

			<article class="padding20" style="padding-bottom:0;">

				<div class=" font1em flex flex-middle">
					<h3 class="font1em color-darkblue" style="width:60%; ">Cuotas semanales:</h3>
					<div class="margin-left20 padding20 flex flex-middle relative" style="right:-3px;border-left:1px solid gray; height:100%; width:40%;">
					<input type="text" class="my-input back-white text-center margin-right10" style="padding:2px; width:30px;" name="">
					<h2 class="font-normal color-darkblue font1-3em">

					$8'800,00.00</h2>
					</div>
				</div>
			</article>

			<section class="padding10" style="padding-top:0;">
				<article class=" margin-bottom15" v-for="i in 4">
					<div class="back-darkblue font1em my-box-shadow flex flex-middle">
						<p class="font-normal font1em color-white padding-left10 text-uppercase anchor" style="width:60%;">Cesar Esau chavez Centeno</p>
						<div class="margin-left20 back-white padding20 flex flex-middle" style="border-left:2px solid #435b72; height:100%; width:40%;">
						<input type="text" class="my-input back-lightgray text-center margin-right10" style="padding:2px; width:30px;" name="">
						<h2 class="font-normal color-darkblue font1-3em">

						$8'800,00.00</h2>
						</div>
					</div>
				</article>
			</section>

			

			
		</section>
	</transition>
</template>