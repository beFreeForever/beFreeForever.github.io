<template>
  <b-container>
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
              <b-button href="#">Подробнее...</b-button>
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
              <b-button href="#">Подробнее...</b-button>
            </b-card>
        </b-col>
      </b-row>
    </section>
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
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b4b84d34e1fd4ac4bd40b630bf660ba&auto=format&fit=crop&w=1950&q=80",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b4b84d34e1fd4ac4bd40b630bf660ba&auto=format&fit=crop&w=1950&q=80",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b4b84d34e1fd4ac4bd40b630bf660ba&auto=format&fit=crop&w=1950&q=80",
          date: new Date(2017, 8, 17).toLocaleDateString()
        }
      ],
      nextMonth: [
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
          description: "asdasd",
          image:
            "https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16becd52248f3ae86554ebc4414d0c35&auto=format&fit=crop&w=500&q=60",
          date: new Date(2017, 8, 17).toLocaleDateString()
        },
        {
          title: "title",
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
