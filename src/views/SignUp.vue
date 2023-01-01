<template>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-bg"
    tabindex="-1"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header">
            <h3>Sign Up</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Register -->
              <div class="tab-content" id="tab2">
                <form method="post" class="register">
                  <p class="form-row form-row-wide">
                    <label for="username2"
                      >Username:
                      <i class="im im-icon-Male"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="username"
                        id="username2"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="email2"
                      >Email Address:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email2"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="phone"
                      >Phone:
                      <i class="im im-icon-Phone-3G"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="phone"
                        id="phone"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="birthday"
                      >Birthday:
                      <div style="display: flex">
                        <select>
                          <option label="Year"></option>
                          <option
                            v-for="(year, index) in arrayYear"
                            :key="index"
                          >
                            {{ year }}
                          </option>
                        </select>

                        <select>
                          <option label="Month"></option>
                          <option
                            v-for="(month, index) in arrayMonth"
                            :key="index"
                          >
                            {{ month }}
                          </option>
                        </select>

                        <select>
                          <option label="Day"></option>
                          <option v-for="(day, index) in arrayDay" :key="index">
                            {{ day }}
                          </option>
                        </select>
                      </div>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="gender"
                      >Gender:
                      <select>
                        <option>Men</option>
                        <option>Girl</option>
                      </select>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password1"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password1"
                        id="password1"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password2"
                      >Repeat Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password2"
                        id="password2"
                      />
                    </label>
                  </p>

                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="register"
                    value="Register"
                  />
                </form>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" class="mfp-close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArrayNumber } from "../utils/createArrayNumber";
export default {
  setup() {
    const arrayMonth = createArrayNumber(1, 12);
    const arrayYear = createArrayNumber(1930, 2022);
    const arrayDay = createArrayNumber(1, 31);
    return {
      arrayMonth,
      arrayYear,
      arrayDay,
    };
  },
};
</script>

<style lang="scss">
.my-bg {
  background-image: url(https://media.cntraveller.com/photos/611bf6548c1b7286f1c1233f/16:9/w_3200,h_1800,c_limit/8-grid.jpg);
  background-size: cover;
  top: 0px;
  position: absolute;
  height: 100vh;
  overflow: scroll;
}
</style>
