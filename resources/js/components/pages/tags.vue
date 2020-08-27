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
							<tr>
								<td>1</td>
								<td class="_table_name">Manhattan's art center "Shed" opening ceremony</td>
								<td>Economy</td>
								<td>
									<button type="info" size="small">Info</button>
									<button type="error" size="error">Info</button>
									
								</td>
							</tr>
								<!-- ITEMS -->


						</table>
					</div>
				</div>
				 <Page :total="100" />

				<modal
					v-model="addModal"
					title="Add tag"
					:mask-closable="false"
					:closable="false">
					<p>Content of dialog</p>

					<div slot="footer">
						<button type="default" class="btn-default btn-sm" @click="addModal=false">Close</button>
						<button type="primary" class="btn-primary btn-sm">Add tag</button>
					</div>
				</modal>


			</div>
		</div>
    </div>
</template>

<script>
export default {
	data(){
		return {
			data: {
				tagName: '',
			},
			addModal: false
		}
	},

	async created(){
		const res= await this.callApi('post', '/app/create_tag', {tagName: 'testtag'});
		//console.log(res)
		if(res.status == 200){
			console.log(res)
		}
	},
}
</script>