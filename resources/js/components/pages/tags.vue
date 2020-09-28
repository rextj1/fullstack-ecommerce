<template>
    <div>
       <div class="content">
			<div class="container-fluid">
					
				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
					<p class="_title0">Tags<button @click="addModal=true"> <Icon type="md-add"/> Add tags</button></p>

					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>ID</th>
								<th>Tag NAme</th>
								<th>Created At</th>
								<th>Action</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr v-for="(tag, i) in tags" :key="i" v-if="tags.length">
								<td>{{ tag.id }}</td>
								<td class="_table_name">{{ tag.tagName }}</td>
								<td>{{ tag.created_at }}</td>
								<td>
									<button type="info"  class="btn-primary btn-sm" size="small" @click="showEditModal(tag)">Edit</button>
									<button type="error"  class="btn-danger btn-sm" size="error">Delete</button>
									
								</td>
							</tr>
								<!-- ITEMS -->


						</table>
					</div>
				</div>
				 <Page :total="100" />

				 <!-- Add modal -->
				<modal
					v-model="addModal"
					title="Add tag"
					:mask-closable="false"
					:closable="false">
					<input v-model="data.tagName" placeholder="add tag name" style="width: 100%">

					<div slot="footer">
						<button type="default" class="btn-default btn-sm" @click="addModal=false">Close</button>
						<button type="primary" class="btn-primary btn-sm" @click="addTag" :disabled="isAdding" :loading="isAdding">{{ isAdding ? 'loading...' : 'Add Tag' }}</button>
					</div>
				</modal>

				<!-- Edit modal -->
				<modal
					v-model="editModal"
					title="Edit tag"
					:mask-closable="false"
					:closable="false">
					<input v-model="editData.tagName" placeholder="edit tag name" style="width: 100%">

					<div slot="footer">
						<button type="default" class="btn-default btn-sm" @click="editModal=false">Close</button>
						<button type="primary" class="btn-primary btn-sm" @click="addTag" :disabled="isAdding" :loading="isAdding">{{ isAdding ? 'loading...' : 'Add Tag' }}</button>
					</div>
				</modal>


			</div>
		</div>+
    </div>
</template>

<script>
export default {
	data(){
		return {
			data: {
				tagName: '',			
			},
			tags: [],
			addModal: false,
			isAdding: false,
			editModal:false,

			editData: {
				tagName: ''
			}
		}
	},

	methods: {
		// to create or post to database
		async addTag(){
			if(this.data.tagName.trim()== '') return this.e('The name is required')
			const res= await this.callApi('post', 'app/create_tag', this.data)
			if(res.status===201){
				this.tags.unshift(res.data)
				this.s('Tag has been added successfully!')
				this.addModal= false
				this.data.tagName= ''
			}else{
				if(res.status===422){
					//console.log(res.data)
					if(res.data.errors.tagName){
						this.e(res.data.errors.tagName[0])
					}
				}else{
					this.swr()
				}
			}
		},
		// to edit database
		async editTag(){
			if(this.editData.tagName.trim()== '') return this.e('The name is required')
			const res= await this.callApi('post', 'app/edit_tag', this.data)
			if(res.status===200){
				this.s('Tag has been edited successfully!')
				this.editModal= false
			}else{
				if(res.status===422){
					if(res.data.errors.tagName){
						this.e(res.data.errors.tagName[0])
					}
				}else{
					this.swr()
				}
			}
		},
		showEditModal(tag){
			this.editData= tag
			this.editModal= true
		}
	},
	async created(){
		// read of get from database
		const res= await this.callApi('get', 'app/get_tags');
		if(res.status == 200){
			this.tags = res.data
			//console.log(this.tags)
		}else{
			this.swr()
		}
	},
}
</script>