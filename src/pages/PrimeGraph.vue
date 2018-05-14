<template>
  <b-container fluid>
    <b-row>
      <b-col sm="2">
        <br>
        <br>
        <br>
        <br>
        <br>
        <b-list-group>
          <b-list-group-item>Январь 2018</b-list-group-item>
          <b-list-group-item>Февраль 2018</b-list-group-item>
          <b-list-group-item>Март 2018</b-list-group-item>
          <b-list-group-item>Апрель 2018</b-list-group-item>
          <b-list-group-item active>Май 2018</b-list-group-item>
          <b-list-group-item>Июнь 2018</b-list-group-item>
          <b-list-group-item>Июль 2018</b-list-group-item>
          <b-list-group-item>Август 2018</b-list-group-item>
          <b-list-group-item>Сентябрь 2018</b-list-group-item>
          <b-list-group-item>Октябрь 2018</b-list-group-item>
          <b-list-group-item>Ноябрь 2018</b-list-group-item>
          <b-list-group-item>Декабрь 2018</b-list-group-item>
          <b-list-group-item>Январь 2019</b-list-group-item>
          <b-list-group-item>Февраль 2019</b-list-group-item>
          <b-list-group-item>Март 2019</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col sm="8">
        <section>
          <br>
          <h1 class="text-center">В этом месяце</h1>
          <br>
          <b-row>
            <b-col sm="12" md="6" xl="4"
              v-for="(item, i) in currentMonth" :key="i">
              <b-card 
                  :title="item.title"
                  :img-src="image"
                  :img-alt="item.title"
                  img-top
                  tag="article"
                  class="mb-2">
                  <p class="card-text">
                    {{item.description}}
                  </p>
                  <p class="card-text">Дата выхода: {{item.date}}</p>
                  <b-button @click="$router.push('/movie')">Подробнее...</b-button>
                </b-card>
            </b-col>
          </b-row>
        </section>
        <section>
          <br>
          <h1 class="text-center">В следующем месяце</h1>
          <br>
          <b-row>
            <b-col sm="12" md="6" xl="4"
              v-for="(item, i) in nextMonth" :key="i">
              <b-card 
                  :title="item.title"
                  :img-src="image"
                  :img-alt="item.title"
                  img-top
                  tag="article"
                  class="mb-2">
                  <p class="card-text">
                    {{item.description}}
                  </p>
                  <p class="card-text">Дата выхода: {{item.date}}</p>
                  <b-button @click="$router.push('/movie')">Подробнее...</b-button>
                </b-card>
            </b-col>
          </b-row>
        </section>
      </b-col>
      <b-col sm="2">
        <br>
        <br>
        <br>
        <br>
        <br>
        <b-card-group deck>
          <b-card no-body header="<b class=`text-center`>Топ 10 ожидаемых фильмов</b>">
            <b-list-group>
              <b-list-group-item v-for="item in 10" :key="item">Фильм {{item}}</b-list-group-item>
              <!-- <b-list-group-item>Веном - 9.9</b-list-group-item>
              <b-list-group-item>Дедпул 2 - 9.7</b-list-group-item>
              <b-list-group-item>Мстители 4 - 9.0</b-list-group-item>
              <b-list-group-item>Аквамен - 8.2</b-list-group-item>
              <b-list-group-item>Валериан 2 - 8.1</b-list-group-item> -->
            </b-list-group>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b4b84d34e1fd4ac4bd40b630bf660ba&auto=format&fit=crop&w=1950&q=80",
      currentMonth: [
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b4b84d34e1fd4ac4bd40b630bf660ba&auto=format&fit=crop&w=1950&q=80",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b4b84d34e1fd4ac4bd40b630bf660ba&auto=format&fit=crop&w=1950&q=80",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b4b84d34e1fd4ac4bd40b630bf660ba&auto=format&fit=crop&w=1950&q=80",
          date: new Date(2017, 8, 17).toLocaleDateString()
        }
      ],
      nextMonth: [
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "Фильм",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        }
      ]
    };
  }
};
</script>

<style>

</style>
