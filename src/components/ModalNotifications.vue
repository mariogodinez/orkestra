<script>

	export default{
		data(){
			return {
        

			}
		},
    watch:{
     
    },
    components:{
      
    },
    methods:{
      
    }
	}
</script>
<style>
  .modal-mask {
  position: fixed;
  z-index: 999543657658;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(231, 236, 241, .96);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 560px;
  margin: 0px auto;
  max-height:80vh;
  overflow:auto;
  padding:10px;
  position: relative;
  top:1vh;
  background-color: rgba(231, 236, 241, .9);
  border-radius: 5px;
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin:0;
}

.modal-default-button {
  text-align:center;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <article class="modal-body margin-bottom0" style="padding-top:10px;">
            <div class="margin-bottom20 padding5 flex flex-middle flex-between" style="position:fixed; top:10px; width:100%;">
              <h4 class="margin-bottom5 color-darkblue font1-5em">Notificaciones</h4>
              <div class="back-white square30 relative rounded flex flex-center flex-middle" style="box-shadow:0 0 20px #777; right:30px;" @click="$emit('closeNotifications')">
                <p class="ion-close-round color-gray font1-3em"></p>
              </div>
              
            </div>

            <section class="margin-bottom20">
              <article style="border-bottom:2px solid #c7d3df;">
                <div class="padding10 back-darkblue font1em my-box-shadow ">
                  <h2 class="font-normal color-white margin-bottom5 text-uppercase">11/ene/2018</h2>
                  <h2 class="color-white">Revisa tus indicadores de venta</h2>
                </div>
                <section class="flex">
                  <div class="back-lightred flex flex-center flex-middle" style="width:30%;">
                      <h2 class="color-white">43%</h2>
                  </div>
                  <div class=" flex flex-middle width100 padding10 back-white">
                      <button class="my-btn back-blue margin-left20" style="width:80%; padding:1.3em 0; border-radius:8px;">
                        <h3 class="color-white text-uppercase">Ir a indicadores</h3>
                    </button>
                  </div>
                </section>
              </article>
            </section>

            <section class="margin-bottom20">
              <article style="border-bottom:2px solid #c7d3df;">
                <div class="padding10 back-darkblue font1em my-box-shadow ">
                  <h2 class="font-normal color-white margin-bottom5 text-uppercase">11/ene/2018</h2>
                  <h2 class="color-white">Tu prospección semanal</h2>
                </div>
                <section class="flex">
                  <div class="back-green flex flex-center flex-middle" style="width:30%;">
                      <h2 class="color-white">103%</h2>
                  </div>
                  <div class=" flex flex-middle width100 padding10 back-white">
                      <button class="my-btn back-blue margin-left20" style="width:80%; padding:1.3em 0; border-radius:8px;">
                        <h3 class="color-white text-uppercase">Ir a prospectos</h3>
                    </button>
                  </div>
                </section>
              </article>
            </section>

            <section class="margin-bottom20">
              <article style="border-bottom:2px solid #c7d3df;">
                <div class="padding10 back-darkblue font1em my-box-shadow ">
                  <h2 class="font-normal color-white margin-bottom5 text-uppercase">11/ene/2018</h2>
                  <h2 class="color-white">Clientes pendientes de contactar</h2>
                </div>
                <section class="flex">
                  <div class="back-lightred flex flex-center flex-middle" style="width:30%;">
                      <h2 class="color-white">27</h2>
                  </div>
                  <div class=" flex flex-middle width100 padding10 back-white">
                      <button class="my-btn back-blue margin-left20" style="width:80%; padding:1.3em 0; border-radius:8px;">
                        <h3 class="color-white text-uppercase">Ir a prospectos</h3>
                    </button>
                  </div>
                </section>
              </article>
            </section>

            <section class="margin-bottom20">
              <article style="border-bottom:2px solid #c7d3df;">
                <div class="padding10 back-darkblue font1em my-box-shadow ">
                  <h2 class="font-normal color-white margin-bottom5 text-uppercase">11/ene/2018</h2>
                  <h2 class="color-white">Clientes pendientes de cotizar/oferta</h2>
                </div>
                <section class="flex">
                  <div class="back-lightred flex flex-center flex-middle" style="width:30%;">
                      <h2 class="color-white">27</h2>
                  </div>
                  <div class=" flex flex-middle width100 padding10 back-white">
                      <button class="my-btn back-blue margin-left20" style="width:80%; padding:1.3em 0; border-radius:8px;">
                        <h3 class="color-white text-uppercase">Ir a ofertas</h3>
                    </button>
                  </div>
                </section>
              </article>
            </section>


            <section class="margin-bottom20">
              <article style="border-bottom:2px solid #c7d3df;">
                <div class="padding10 back-darkblue font1em my-box-shadow ">
                  <h2 class="font-normal color-white margin-bottom5 text-uppercase">11/ene/2018</h2>
                  <h2 class="color-white">Cierres faltantes</h2>
                </div>
                <section class="flex">
                  <div class="back-lightred flex flex-center flex-middle" style="width:30%;">
                      <h2 class="color-white">27</h2>
                  </div>
                  <div class=" flex flex-middle width100 padding10 back-white">
                      <button class="my-btn back-blue margin-left20" style="width:80%; padding:1.3em 0; border-radius:8px;">
                        <h3 class="color-white text-uppercase">Ir a cierres</h3>
                    </button>
                  </div>
                </section>
              </article>
            </section>


            <section class="margin-bottom20">
              <article style="border-bottom:2px solid #c7d3df;">
                <div class="padding10 back-darkblue font1em my-box-shadow ">
                  <h2 class="font-normal color-white margin-bottom5 text-uppercase">11/ene/2018</h2>
                  <h2 class="color-white">Clientes pendientes de contactar</h2>
                </div>
                <section class="flex">
                  <div class="back-lightred flex flex-center flex-middle" style="width:30%;">
                      <h2 class="color-white">27</h2>
                  </div>
                  <div class=" flex flex-middle width100 padding10 back-white">
                      <button class="my-btn back-blue margin-left20" style="width:80%; padding:1.3em 0; border-radius:8px;">
                        <h3 class="color-white text-uppercase">Ir a prospectos</h3>
                    </button>
                  </div>
                </section>
              </article>
            </section>

          </article>
          <div class="modal-footer ">
	          
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
