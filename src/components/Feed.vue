<template>
	<div>
		<div v-if = 'isLoading'>Loading...</div>

		<div v-if = 'error'>Error...</div>

		<div v-if = 'feed'>
			<div class = 'article-preview' v-for = 'article in feed.articles' :key = 'article.createdAt'>
				<div class = 'article-meta'>
					<router-link
						:to = "{
						name: 'userProfile',
						params: {slug: article.author.username
						}}"
					>
						<img :src = 'article.author.image' alt = ''>
					</router-link>

					<div class = 'info'>
						<router-link
							:to = "{
						name: 'userProfile',
						params: {slug: article.author.username
						}}"
							class = 'author'
						>
							{{ article.author.username }}
						</router-link>
						<span class = 'date'>{{ article.createdAt }}</span>
					</div>
					<div class = 'pull-xs-right'>
						ADD TO FAVORITES
					</div>
				</div>
				<router-link :to = "{name: 'article', params: {slug: article.slug}}" class = 'preview-link'>
					<h1>{{ article.title }}</h1>
					<p>{{ article.description }}</p>
					<span>Read more...</span>
					TAG LIST
				</router-link>
			</div>
			<mcv-pagination
				:total = 'total'
				:limit='limit'
				:current-page='currentPage'
				:url='url'
			/>
		</div>
	</div>
</template>

<script>
import {actionTypes} from '@/store/modules/Feed'
import {mapState} from 'vuex'
import McvPagination from '@/components/Pagination'

export default {
	name: 'McvFeed',
	mounted() {
		this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl})
	},
	data() {
		return {
			total: 500,
			limit: 10,
			currentPage: 5,
			url: '/'
		}
	},
	props: {
		apiUrl: {
			type: String,
			required: true
		}
	},
	components: {
		McvPagination
	},
	computed: {
		...mapState({
			isLoading: state => state.feed.isLoading,
			feed: state => state.feed.data,
			error: state => state.feed.error
		})
	},

}
</script>

<style scoped>

</style>