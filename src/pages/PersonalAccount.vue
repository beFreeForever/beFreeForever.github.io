<template>
  <b-container>
      <br>
      <section>
          <b-row>
              <b-col sm="6" xl="4">
                  <b-img 
                    src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b4b84d34e1fd4ac4bd40b630bf660ba&auto=format&fit=crop&w=1950&q=80" fluid/>
              </b-col>
              <b-col sm="6" xl="4">
                <b-row>
                  <b-col>
                    <b-card>
                      <b-row>
                        <b-col sm="2"><label for="input-small">Логин:</label></b-col>
                        <b-col sm="10">
                          <span>+79995553311</span>
                        </b-col>

                        <b-col>
                          <b-button>
                            Изменить
                          </b-button>
                        </b-col>
                      </b-row>
                    </b-card>
                  </b-col>
                </b-row>
                <br>     
                    <!-- <b-button @click="isShowGiveCertificate = true">
                      Подарить сертификат
                    </b-button>
                    <br><br>
                    <b-button @click="isShowInvitation = true">
                      Пригласить в кино
                    </b-button> -->
                <b-row>
                  <b-col>
                    <b-button @click="isShowGiveCertificate = true">
                      Подарить сертификат
                    </b-button>
                  </b-col>
                  <br><br>
                  <b-col>
                    <b-button @click="isShowInvitation = true">
                      Пригласить в кино
                    </b-button>
                  </b-col>
                </b-row>         
              </b-col>
              <b-col sm="12" xl="4">
                <b-card>
                  <p class="card-text">
                    Есть вопросы?<br>
                    Позвоните нам:<br>
                    +75553331111 <br>
                    <br>
                    Или напишите:<br>
                    кинотеатр@mail.ru<br>
                  </p>
                </b-card>
              </b-col>
          </b-row>
      </section>
      <br>
      <br>
      <section>
        <h1>Посещённые фильмы</h1>
        <br>
        <b-row>
          <b-col v-for="(item, i) in 3" :key="i"
            sm="12" md="6" xl="4">
            <b-card 
              title="Мстители"
              img-src="https://cs9.pikabu.ru/post_img/big/2018/02/27/11/151975827212991952.jpg"
              img-alt="Мстители"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <b-button variant="second">Подробнее...</b-button>
            </b-card>
          </b-col>
        </b-row>
    </section>

    <b-modal v-model="isShowGiveCertificate" centered title="Подарить сертификат">
      <b-container>
          <b-row class="mb-1">
            <b-col sm="6">
              <b-form-input
                  v-model="invite.phone"
                  type="text"
                  placeholder="Введите телефон"/>
                <br>
              </b-col>
              <b-col sm="12">
              <b-form-textarea
                  v-model="invite.message"
                  placeholder="Введите сообщение"
                  :rows="3"/>
              </b-col>
          </b-row>
      </b-container>
      <div slot="modal-footer" class="w-100">
        <b-btn size="sm" class="float-right" variant="success" @click="give.isShowGiveCertificate = false; give.isSend = true;">
          Подарить
        </b-btn>
      </div>
    </b-modal>
    <b-modal v-model="give.isSend" centered title="Подарить сертификат">
      <p>
        Ваше сообщение, а так же код для получения сертификата отправлены абоненту: <br>
        {{give.phone}}
      </p>
      <p>
        Ваше сообщение:
      </p>
      <p>{{give.message}}</p>
      <div slot="modal-footer" class="w-100">
        <b-btn size="sm" class="float-right" variant="success" @click="give.isSend = false; give.login = null; give.message = null;">
           Спасибо
         </b-btn>
      </div>
    </b-modal>

    <b-modal v-model="isShowInvitation" centered title="Приглашение в кино">
      <b-container>
         <b-row class="mb-1">
           <b-col sm="6">
             <b-form-input
                v-model="invite.phone"
                type="text"
                placeholder="Введите телефон"/>
              <br>
            </b-col>
            <b-col sm="12">
             <b-form-textarea
                v-model="invite.message"
                placeholder="Введите сообщение"
                :rows="3"/>
            </b-col>
         </b-row>
      </b-container>
      <div slot="modal-footer" class="w-100">
        <b-btn size="sm" class="float-right" variant="success" @click="invite.isShowInvitation = false; invite.isSend = true">
           Пригласить
         </b-btn>
      </div>
    </b-modal>
    <b-modal v-model="invite.isSend" centered title="Подарить сертификат">
      <p>
        Ваше сообщение, а так же код для получения сертификата отправлены абоненту: <br>
        {{invite.phone}}
      </p>
      <p>
        Ваше сообщение:
      </p>
      <p>{{invite.message}}</p>
       <div slot="modal-footer" class="w-100">
        <b-btn size="sm" class="float-right" variant="success" @click="invite.isSend = false; invite.login = null; invite.message = null;">
           Спасибо
         </b-btn>
      </div>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      isShowGiveCertificate: false,
      isShowInvitation: false,
      give: {
        phone: null,
        message: null,
        isSend: false
      },
      invite: {
        phone: null,
        message: null,
        isSend: false
      }
    };
  }
};
</script>