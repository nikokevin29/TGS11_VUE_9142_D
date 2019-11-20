<template>
    <v-app>
        <v-content>
            <v-container class="fill-height" fluid >
                <v-row justify="center">
                    <v-col cols="4" md="5">
                        <v-card>
                            <v-row>
                                <v-col cols="3"></v-col>
                                <v-col cols="6">
                                    <div>
                                        <h2 style="center">Login</h2>
                                    </div>
                                    <div class="form">
                                        <v-text-field v-model="form.email" label="Email" filled rounded></v-text-field>
                                        <v-text-field v-model="form.password" label="Password" filled rounded dense:type="show1 ? 'text' : 'password'" @click: append="show1 = !show1">
                                        </v-text-field>
                                        <v-btn @click="login()" block color="normal" class="elevation-0" height=50>Login</v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    email: null,
                    password: null,
                },
                user: new FormData,
            }
        },

        methods: {
            login() {
                var url = this.$apiUrl + '/auth'

                this.user = new FormData() 
                this.user.append('email', this.form.email);
                this.user.append('password', this.form.password);

                this.$http.post(url, this.user).then(response => {
                        if (response.data.token) {
                            localStorage.setItem("token", response.data.token) 
                            this.$router.push({
                                    name: "userPath"
                                }
                            )
                        } else {
                            alert('login failed')
                        }
                    }
                )
            }
        }
    }
</script>
