<script type="text/javascript">
	export default {
		data(){
			return {
				go: false,
			}
		},
		components:{
		},
		methods:{
			goProspect(){
				this.$router.push('/prospectar')
			}
		}
	}
</script>



<template>
	<transition appear name="custom-classes-transition" appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="">
		<section class="my-container">
			
			<article class="padding1em">
				<h2 class="margin0">Nombre del vendedor</h2>
			</article>
			<article class="padding1em">
				filtros heree...
			</article>

			<article class="padding10">
				<div class="padding10 back-darkblue font1em my-box-shadow">
					
					<h2 class="font-normal color-white margin-bottom5 text-uppercase">Cuota semanal</h2>
					<h2 class="color-white">$30,000</h2>

				</div>
			</article>

			<article class="padding10">

				<div class="flex flex-between back-white font1em my-box-shadow">
					<article class="padding10 ">
						<h2 class="font-normal color-black margin-bottom5">Ventas/cuota total semanal</h2>
						<h2 class="color-black">$7,239</h2>
					</article>
					<article class="back-lightred padding10 flex flex-center flex-middle" style="width:50px;">
						<h2 class="color-white">8%</h2>
					</article>
					

				</div>
			</article>

			<article class="padding10">
				<div class="padding10 back-white font1em my-box-shadow">
					<h2 class="font-normal color-black margin-bottom5">Te falta vender</h2>
					<h2 class="color-black">$25,239</h2>
				</div>
			</article>

			<article class="padding10 flex flex-center">
				<button class="my-btn back-blue" style="width:70%; padding:1.3em 0; border-radius:8px;" @click="goProspect">
					<h3 class="color-white text-uppercase">Prospectar</h3>
				</button>
			</article>

			<div class="margin-top20 margin-bottom20" style="border:1px solid white;"></div>

			<article class="padding1em" style="padding-bottom:0;">
				<p class="margin0 font1-3em">Tu Prospección</p>
			</article>

			<article class="padding10">
				<div class="font1em flex flex-between">
					<article class="text-center width100 padding5 flex flex-center flex-middle" style="padding-bottom:0;">
						<h3 class="font1-5em font-normal" >Prospectos</h3>
					</article>
					<article class="text-center width100 padding5 flex flex-center flex-middle" style="padding-bottom:0;">
						<h3 class="font1-5em font-normal">Meta</h3>
					</article>
					<article class="text-center padding20 flex flex-center flex-middle" style="width:100px;">
						<p class="color-white">.</p>
					</article>
				</div>
				<div class=" back-white font1em my-box-shadow flex flex-between">
					<article class="text-center width100 padding5 flex flex-center flex-middle">
						<h2 class="" >$122,900</h2>
					</article>
					<article class="text-center width100 padding5 flex flex-center flex-middle">
						<h2 class="">$1'790,000</h2>
					</article>
					<article class="text-center back-lightred padding20 flex flex-center flex-middle" style="width:50px;">
						<h2 class="color-white">23%</h2>
					</article>
				</div>
			</article>

			<article class="padding10">

				<div class="font1em flex flex-between">
					<article class="text-center width100 padding5 flex flex-center flex-middle">
						<h3 class="font1-5em font-normal">Contactados vs. plan</h3>
					</article>
					<article class="text-center width100 padding5 flex flex-center flex-middle">
						<h3 class="font1-5em font-normal">Ventas vs. ofertas</h3>
						
					</article>
					<article class="text-center width100 padding5 flex flex-center flex-middle">
						<h3 class="font1-5em font-normal">Ofertas vs. contactados</h3>
						
					</article>
				</div>

				<div class=" back-white font1em my-box-shadow flex flex-between">
					<article class="text-center width100 padding20-5 flex flex-center flex-middle">
						<h2 class="" >0/1 <span class="color-lightred">0%</span></h2>
					</article>
					<article class="text-center width100 padding20-5 flex flex-center flex-middle">
						<h2 class="" >0/1 <span class="color-lightred">0%</span></h2>
					</article>
					<article class="text-center width100 padding20-5 flex flex-center flex-middle">
						<h2 class="" >0/1 <span class="color-lightred">0%</span></h2>
					</article>
					
				</div>
			</article>

			<div class="margin-top20 margin-bottom20" style="border:1px solid white;"></div>

			<article class="padding1em" style="padding-bottom:0;">
				<p class="margin0 font1-3em">Tus estadísticos de venta</p>
			</article>

			<article class="padding10">

				<div class="flex back-white font1em my-box-shadow margin-bottom20">
					<article class=" widthHalf  padding10">
						<h3 class="font-normal">Ticket promedio</h3>
						<h3 class="color-lightred">$1'212,233</h3>

					</article>
					<article class="widthHalf padding10">
						<h3 class="font-normal color-gray">Promedio</h3>

						<h3 class=" color-gray">$1'400,000</h3>
						
					</article>
					

				</div>

				<div class=" back-white font1em margin-bottom20 my-box-shadow flex flex-between">
					<article class="width100 padding5 flex flex-middle margin-left10">
						<h2 class="font-normal">Articulos por ticket</h2>
					</article>
					
					<article class="text-center back-green  padding20 flex flex-center flex-middle" >
						<h2 class="color-white" style="width:60px;">2</h2>
					</article>

					<article class="text-center back-gray padding20 flex flex-column flex-center flex-middle" style="width:50px;">
					<div class="relative" style="top:-.5em;">
						<p class="color-white" >Promedio</p>
						<h2 class="color-white">1.8</h2>
					</div>
						
					</article>
				</div>


				<div class=" back-white font1em my-box-shadow flex flex-between">
					<article class="width100 padding5 flex flex-middle margin-left10">
						<h2 class="font-normal">Tasa de conversión</h2>
					</article>
					
					<article class="text-center back-lightred  padding20 flex flex-center flex-middle">
						<h2 class="color-white" style="width:60px;">38%</h2>
					</article>

					<article class="text-center back-gray padding20 flex flex-column flex-center flex-middle" style="width:50px;">
					<div class="relative" style="top:-.5em;">
						<p class="color-white" >Promedio</p>
						<h2 class="color-white">44%</h2>
					</div>
						
					</article>
				</div>
			</article>


			<article class="padding10">
				<div class="flex back-white font1em my-box-shadow margin-bottom20">
					<article class=" widthHalf  padding10">
						<h3 class="font-normal">Monto promedio</h3>
						<h3 class="color-lightred">$1'212,233</h3>

					</article>
					<article class="widthHalf padding10">
						<h3 class="font-normal color-gray">Promedio</h3>

						<h3 class=" color-gray">$1'400,000</h3>
						
					</article>
					

				</div>

				<div class=" back-white font1em margin-bottom20 my-box-shadow flex flex-between">
					<article class="width100 padding5 flex flex-middle margin-left10">
						<h2 class="font-normal">No. de ventas</h2>
					</article>
					
					<article class="text-center back-green  padding20 flex flex-center flex-middle" >
						<h2 class="color-white" style="width:60px;">2</h2>
					</article>

					<article class="text-center back-gray padding20 flex flex-column flex-center flex-middle" style="width:50px;">
					<div class="relative" style="top:-.5em;">
						<p class="color-white" >Promedio</p>
						<h2 class="color-white">1.8</h2>
					</div>
						
					</article>
				</div>


				<div class=" back-white font1em my-box-shadow flex flex-between">
					<article class="width100 padding5 flex flex-middle margin-left10">
						<h2 class="font-normal">Ofertas / conversiones</h2>
					</article>
					
					<article class="text-center back-lightred  padding20 flex flex-center flex-middle">
						<h2 class="color-white" style="width:60px;">38%</h2>
					</article>

					<article class="text-center back-gray padding20 flex flex-column flex-center flex-middle" style="width:50px;">
					<div class="relative" style="top:-.5em;">
						<p class="color-white" >Promedio</p>
						<h2 class="color-white">44%</h2>
					</div>
						
					</article>
				</div>
			</article>

			<div class="margin-top20 margin-bottom20" style="border:1px solid white;"></div>


			<article class="padding1em" style="padding-bottom:0;">
				<p class="margin0 font1-3em">Venta mensual</p>
			</article>

			<article class="padding10">
				<div class="padding10 back-darkblue font1em my-box-shadow">
					
					<h2 class="font-normal color-white margin-bottom5 text-uppercase">Cuota mensual</h2>
					<h2 class="color-white">$10'000,000</h2>

				</div>
			</article>

			<article class="padding10">

				<div class="flex flex-between back-white font1em my-box-shadow">
					<article class="padding10 ">
						<h2 class="font-normal color-black margin-bottom5">Ventas/cuota total mensual</h2>
						<h2 class="color-black">$6'050,000</h2>
					</article>
					<article class="back-lightred padding10 flex flex-center flex-middle" style="width:50px;">
						<h2 class="color-white">2</h2>
					</article>
					

				</div>
			</article>

			<article class="padding10">
				<div class="padding10 back-white font1em my-box-shadow">
					<h2 class="font-normal color-black margin-bottom5">Te falta vender</h2>
					<h2 class="color-black">$4'557,239</h2>
				</div>
			</article>

			<br>
			<br>
			<br>

		</section>
	</transition>
</template>