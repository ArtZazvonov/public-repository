<template>
	<div class="modal-content">
		<div class="container">
			<div class="modal-block">
				<div class="modal-block__title">
					<h2>Заявка на расчет</h2>
					<p>Оставьте заявку на расчет стоимости вашего проекта. Как только мы ее получим, наш менеджер свяжется с вами в течение рабочего дня, чтобы обсудить детали будущего проекта и подготовить предложение.</p>					
				</div>
				<div class="modal-block__content">
					<div class="form modal-form">
						<form @submit.prevent="onSubmit">
							<input type="text" class="hideinput" autocomplete="disabled" v-model="postData.hideinput">
							<div class="form__left">
								<div class="input-box" :class="{'input-error': $v.postData.name.$error}">
									<input 
										id="name" 
										class="validate-input"
										type="text" 
										placeholder="Ваше имя"
										@blur="$v.postData.name.$touch()" 
										v-model="postData.name"
									>
									<span v-if="!$v.postData.name.required">Поле обязательно для заполнения</span>
								</div>
								<div class="input-box" :class="{'input-error': $v.postData.email.$error}">
									<input 
										id="email" 
										class="validate-input" 
										type="email" 
										placeholder="Email" 
										@blur="$v.postData.email.$touch()" 
										v-model="postData.email"
									>
									<span v-if="!$v.postData.email.required">Поле обязательно для заполнения</span>
									<span v-if="!$v.postData.email.email">Email введён некорректно</span>
								</div>
								<div class="input-box" :class="{'input-error': $v.postData.phone.$error}">
									<input 
										id="phone" 
										class="validate-input" 
										type="phone" 
										placeholder="Телефон"
										@blur="$v.postData.phone.$touch()" 
										v-model="postData.phone"
									>
									<span v-if="!$v.postData.phone.required">Поле обязательно для заполнения</span>
									<span v-if="!$v.postData.phone.PhoneReg">Телефон введён некорректно</span>
								</div>									
							</div>
							<div class="form__right">
								<div class="input-box">
									<textarea name="messege" id="messege" rows="2" placeholder="Текст сообщения"></textarea>
								</div>									
							</div>	
							<div class="form__button">
								<button class="btn btn-blue btn-form" type="submit" :disabled="$v.$invalid || postData.checkbox == false">Рассчитать стоимость</button>
								<div class="check-box">
									<input id="check" type="checkbox" :value="postData.checkbox" v-model="postData.checkbox">
									<div class="check-flag" @click="postData.checkbox = !postData.checkbox" :class="{ 'active' : postData.checkbox }">
										<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M14.2936 0.292718C14.6839 -0.0975725 15.3168 -0.0975725 15.7072 0.292718C16.0976 0.683038 16.0976 1.31587 15.7072 1.70616L5.75895 11.6537C5.7431 11.672 5.72648 11.6899 5.70909 11.7073C5.51344 11.9029 5.25681 12.0005 5.00039 12C4.74395 12.0005 4.48735 11.9029 4.29169 11.7073C4.2743 11.6899 4.25768 11.672 4.24183 11.6537L0.292779 7.7051C-0.0975929 7.31478 -0.0975929 6.68195 0.292779 6.29166C0.683152 5.90134 1.31607 5.90134 1.70644 6.29166L5.00039 9.58524L14.2936 0.292718Z" fill="white"/>
										</svg>
									</div>
									<label for="check" @click="postData.checkbox == !postData.checkbox">Я даю свое согласие на обработку персональных данных</label>							
								</div>	
							</div>							
						</form>
					</div>
				</div>
			</div>	
			<div class="modal-close" @click="closeModal">
				<div class="close-btn">
					<span></span><span></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { required, email, maxLength, helpers } from 'vuelidate/lib/validators'
	const PhoneReg = helpers.regex('alpha', /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
	export default {
		data() {
			return{
				postData: {
	                name: '',
	                email: '',
	                phone: '',
	                message: '',
	                timer: null,
	                hideinput: '',
	                checkbox: true
	            }
			}
		},
		methods: {
			onSubmit() {
				console.log('Name', this.postData.name)
				console.log('Phone', this.postData.phone)
				console.log('Email', this.postData.email)
				console.log('Messege', this.postData.message)
				this.resetForm();
			},
			resetForm() {
			    this.postData.name = '';
			    this.postData.email = '';
			    this.postData.phone = '';
			    this.postData.message = '';
			},
			closeModal(){
				this.$emit('closeModal')
			}
		},
		validations: {
			postData:{
				name: {
					required
				},
				email: {
					required,
					email				
				},
				phone: {
					required,
					PhoneReg
				},
				hideinput:{
					maxLength: maxLength(0)
				}
			}
		},
	}
</script>
<style lang="scss">
	.modal-content{
		position: fixed;
		top: 0;
		left: 0;
		transform: translateX(100%);
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ececec;
		transition: 0.6s;
		z-index: 20;
	}
	.modal-content.active{
		transform: translateX(0);
	}
	.modal-block{
		&__title{
			display: flex;
			justify-content: space-between;
			margin-bottom: 180px;
			h2{
				width: 48%;
				font-weight: 500;
				font-size: 48px;
				line-height: 68px;
			}
			p{
				width: 48%;
				max-width: 560px;
				font-weight: 300;
				font-size: 18px;
				line-height: 32px;
			}
		}
		&__content{}
	}
	.modal-close{
		position: absolute;
		right: 0;
		top: 0;
		width: 120px;
		height: 100%;
		background-color: #ececec;
		border-left: 1px solid #DFE1EA;
		cursor: pointer;
		transition: 0.2s;
		&:hover{
			box-shadow: 0 0 40px 1px rgba(0,0,0,0.2);
			.close-btn{
				width: 30px;
				height: 30px;
			}
		}
	}
	.close-btn{
		position: absolute;
		top: 50%;
		left: 50%;
		width: 26px;
		height: 26px;
		transition: 0.2s;
		transform: translate(-50%, -50%);
		span{position: absolute; top: 0; left: 0; display: block; width: 100%; height: 1px; background-color: #6C7583;}
		span:nth-child(1){width: 100%; top: 50%; transform: rotate(-45deg);}
		span:nth-child(2){width: 100%; top: 50%; transform: rotate(45deg);}
	}
	@media all and (max-width: 1440px){
		.modal-content{
			padding-right: 120px; 
		}
		.modal-block{
			&__title{
				margin-bottom: 90px;
			}
		}
	}
	@media all and (max-width: 1024px){
		.modal-block__title p{font-size: 16px; line-height: 28px;}
		.modal-block__title h2{font-size: 32px; line-height: 52px;}		
	}
	
</style>