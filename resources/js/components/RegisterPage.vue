<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">REGISTER</div>

          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="form-group row">
                <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>

                <div class="col-md-6">
                  <input
                    v-model="username"
                    id="username"
                    type="text"
                    class="form-control"
                    name="username"
                    value
                    required
                    autocomplete="username"
                    autofocus
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="fullname" class="col-md-4 col-form-label text-md-right">Fullname</label>

                <div class="col-md-6">
                  <input
                    v-model="fullname"
                    id="fullname"
                    type="text"
                    class="form-control"
                    name="fullname"
                    value
                    required
                    autocomplete="fullname"
                    autofocus
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input
                    v-model="email"
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autocomplete="email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    v-model="password"
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    autocomplete="new-password"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password-confirm"
                  class="col-md-4 col-form-label text-md-right"
                >Confirm Password</label>

                <div class="col-md-6">
                  <input
                    v-model="confirmpassword"
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    name="password_confirmation"
                    required
                    autocomplete="new-password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  data: function() {
    return {
      username: "",
      fullname: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  },
  methods: {
    submitForm: function() {
      const register = axios.post("api/register", {
        username: this.username,
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmpassword
      });

      register
        .then(response => {
          this.$router.push("/dashboard");
        })
        .catch(error => {
          this.$router.push("/register");
        });
    }
  }
};
</script>
