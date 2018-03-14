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
				<h2 class="margin-bottom5 color-darkblue">Asignación de metas generales</h2>
				<h3 class="font-normal color-darkblue">Asignar el porcentaje de ventas a cada sucursal.</h3>
			</article>

			<section class="padding10" style="padding-top:0;">
				<article class=" margin-bottom15" v-for="i in 4">
					<div class="back-darkblue font1em my-box-shadow flex flex-middle">
						<h3 class=" font1em color-white padding-left10 text-uppercase" style="width:40%;">Nombre de la sucursal</h3>
						<div class=" back-white padding10 flex flex-middle" style="border-left:2px solid #435b72; height:100%; width:60%;">
							<h2 class="font-normal color-darkblue font1-3em margin-right5">
							$</h2>
							<input type="text" class="my-input back-lightgray text-center margin-right10 color-black" style="padding:8px; width:100px;" name="">
							<h2 class="font-normal color-darkblue font1-3em">
							men.</h2>
						</div>
					</div>
				</article>
			</section>

			

			
		</section>
	</transition>
</template>