<template>
    <div id="nav">
      <b-navbar toggleable="md" type="dark" variant="primary">
        <b-container>
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name:'home'}" exact>Home</b-nav-item>
              <b-nav-item :to="{name:'nosotros'}">Nosotros</b-nav-item>
              <b-nav-item :to="{name:'grid'}">Grid</b-nav-item>
              <b-nav-item :to="{name:'cards'}">Cards</b-nav-item>
              <b-nav-item :to="{name:'form'}">Form</b-nav-item>
              <b-nav-item :to="{name:'vuelidate'}">Vuelidate</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'navigation'
}
</script>
