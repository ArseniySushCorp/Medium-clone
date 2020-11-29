<template>
	<div>
		<McvTopbar/>

		<router-view/>
	</div>
</template>

<script>
import McvTopbar from '@/components/Topbar'
import {actionTypes} from '@/store/modules/Auth'

export default {
	name: 'McvApp',
	components: {
		McvTopbar,
	},
	mounted() {
		this.$store.dispatch(actionTypes.getCurrentUser)
	}
}
</script>