<template>
	<div class = 'auth-page'>
		<div class = 'container page'>
			<div class = 'row'>
				<div class = 'col-md-6 offset-md-3 col-xs-12'>
					<h1 class = 'text-xs-center'>Sign in</h1>
					<p class = 'text-xs-center'>
						<router-link :to = "{name: 'register'}">Need an account?</router-link>
					</p>

					<McvValidationErrors
						v-if='validationErrors'
						:validation-errors = 'validationErrors'
					/>

					<form
						@submit.prevent = 'onSubmit'
						class = 'ng-valid ng-valid-email ng-dirty ng-valid-parse ng-submitted'
					>
						<fieldset class = 'form-group'>
							<input
								v-model='email'
								type = 'email'
								class = 'form-control form-control-lg'
								placeholder = 'Email'
							/>
						</fieldset>

						<fieldset class = 'form-group'>
							<input
								v-model='password'
								type = 'password'
								class = 'form-control form-control-lg'
								placeholder = 'Password'
							/>
						</fieldset>
						<button
							class = 'btn btn-lg btn-primary pull-xs-right'
							:disabled = 'isSubmitting'
						>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'

import McvValidationErrors from '@/components/ValidationErrors'
import {actionTypes} from '@/store/modules/Auth'

export default {
	name: 'McvLogin',
	components: {
		McvValidationErrors
	},
	data() {
		return {
			email: '',
			password: ''
		}
	},
	computed: {
		...mapState({
			isSubmitting: state => state.auth.isSubmitting,
			validationErrors: state => state.auth.validationErrors
		})
	},
	methods: {
		onSubmit() {
			this.$store.dispatch(actionTypes.login, {
				email: this.email,
				password: this.password
			}).then(() => {
				this.$router.push({name: 'GlobalFeed'})
			})
		}
	}
}
</script>

<style scoped>

</style>