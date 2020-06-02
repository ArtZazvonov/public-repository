<template>
	<div id="app">
		<modal :class="isModalActive ? 'active' : ''" @closeModal="closeModal"></modal>
		<Menu></Menu>
		<section class="main">
			<div class="container">
				<div class="main-content" id="main">
					<h1 class="main-title">Иллюстрации для комплексной упаковки вашего продукта</h1>
					<div class="section-block showreel" id="showreel">
						<div class="section-block__title">
							<span>Showreel</span>
						</div>
						<div class="section-block__content">
							<img src="./assets/img/img-01.jpg" alt="">
						</div>
					</div>	
					<div class="main-desc">
						<p>Мы создаем яркие и привлекательные иллюстрации для рекламы, сайтов, упаковки и комплексного оформления продукта. Нажмите на кнопку ниже, чтобы обсудить детали и узнать стоимость вашего проекта.</p>
						<div class="btn btn-blue" @click="showModal">Рассчитать стоимость</div>
					</div>
				</div>
				<div class="section-block" id="clients">
					<div class="section-block__title">
						<span>Наши клиенты</span>
						<h2>Уже более 5 лет мы воплощаем самые смелые идеи наших клиентов и помогаем им добиться высоких результатов</h2>
					</div>
					<div class="section-block__content">
						<div class="client-logo">
							<div class="logo-img" v-for="logo in clients">
								<img :src="logo.img" alt="">
							</div>							
						</div>						
					</div>
				</div>			
			</div>
		</section>
		<section class="what" id="what">
			<div class="container">
				<div class="section-block">
					<div class="section-block__title">
						<span>Для чего</span>
						<h2>В мире существует огромное количество языков. Но лишь визуальные образы и смыслы понятны всем — это и есть универсальный язык человечества. С помощью наших иллюстраций можно:</h2>
					</div>
					<div class="section-block__content">
						<div class="what-items">
							<div class="what-item" v-for="item in whats">
								<img :src="item.img" alt="">
								<p class="title">{{ item.title }}</p>
								<p class="desc">{{ item.desc }}</p>
							</div>
						</div>					
					</div>
				</div>		
			</div>
		</section>
		<section class="work" id="work">
			<div class="container">
				<div class="section-block">
					<div class="section-block__title">
						<span>Наши Работы</span>
						<h2>Каждый из этих проектов на 100% отработал для наших заказчиков</h2>
					</div>
					<div class="section-block__content">
						<div class="work-items">
							<div class="work-item" v-for="(work, index) in works" :key="index">
								<h3 class="work-title" v-html="work.title"></h3>
								<p class="work-desc" v-html="work.desc"></p>
								<img :src="work.img" alt="">
							</div>
						</div>
						<div class="btn btn-gray">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.9961 0C11.4441 0 10.9966 0.447501 10.9966 0.999521V14.5796L7.70619 11.2889C7.31588 10.8986 6.68305 10.8986 6.29274 11.2889C5.90242 11.6793 5.90242 12.3121 6.29274 12.7025L11.2185 17.6286C11.2405 17.6558 11.2641 17.682 11.2894 17.7072C11.4855 17.9034 11.7429 18.001 12 18C12.2571 18.001 12.5145 17.9034 12.7106 17.7072C12.7359 17.682 12.7595 17.6558 12.7815 17.6286L17.7073 12.7025C18.0976 12.3121 18.0976 11.6793 17.7073 11.2889C17.3169 10.8986 16.6841 10.8986 16.2938 11.2889L12.9956 14.5874V0.999521C12.9956 0.447501 12.5481 0 11.9961 0Z" fill="#131A23"/>
								<path d="M2 20V19C2 18.4477 1.55228 18 1 18C0.447715 18 0 18.4477 0 19V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V19C24 18.4477 23.5523 18 23 18C22.4477 18 22 18.4477 22 19V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z" fill="#131A23"/>
							</svg>Скачать PDF презентацию
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="stages" id="stages">
			<div class="container">
				<div class="section-block">
					<div class="section-block__title">
						<span>Этапы разработки</span>
						<h2>Как мы работаем?</h2>
					</div>
					<div class="section-block__content">
						<div class="stages-items">
							<div class="stage-item" v-for="(stage, index) in stages" :key="index">
								<span class="stage-number">{{ index + 1 }}</span>
								<p class="stage-text" v-html="stage"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="efficiency" id="efficiency">
			<div class="container">
				<div class="section-block">
					<div class="section-block__title">
						<span>Эффективность</span>
						<h2>С помощью создания иллюстрации мы поможем вам решить следующие задачи:</h2>
					</div>
					<div class="section-block__content">
						<div class="what-items">
							<div class="what-item" v-for="item in efficiency">
								<img :src="item.img" alt="">
								<p class="desc" >{{ item.title }}}</p>
							</div>
						</div>					
					</div>
				</div>		
			</div>
		</section>
		<section class="cost" id="cost">
			<div class="container">
				<div class="section-block">
					<div class="section-block__title">
						<span>стоимость</span>
						<h2>Оставьте заявку на расчет стоимости вашего проекта. Как только мы ее получим, наш менеджер свяжется с вами в течение рабочего дня, чтобы обсудить детали будущего проекта и подготовить предложение.</h2>
					</div>
					<div class="section-block__content">
						<div class="btn btn-dark" @click="showModal">Рассчитать стоимость</div>			
					</div>
				</div>	
			</div>
		</section>
		<section class="payment" id="payment">
			<div class="container">
				<div class="section-block">
					<div class="section-block__title">
						<span>заявка на расчет</span>
						<h2>Вы хотите усилить позиции вашего бренда и продуктов? Вам необходимо увеличить продажи? Вам интересно, как визуальные решения вам в этом помогут?</h2>
						<p>Отправьте нам заявку на расчет стоимости вашего проекта.</p>
					</div>
					<div class="section-block__content">
						<div class="form payment-form">
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
			</div>
		</section>
		<footer>
			<div class="container footer-content">
				<div class="footer-phone">
					<span>Контактный телефон</span>
					<a href="tel:+7 495 41 42 007">+7 495 41 42 007</a>
				</div>
				<div class="footer-email">
					<span>Email для связи</span>
					<a href="mailto:hi@ojoart.com">hi@ojoart.com</a>
				</div>
			</div>
		</footer>
	</div>
</template>
<script>
	import Menu from './Menu.vue'
	import Modal from './Modal.vue'
	import { required, email, maxLength, helpers } from 'vuelidate/lib/validators'
	const PhoneReg = helpers.regex('alpha', /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
	export default {
		data () {
			return {
				isModalActive: false,
				postData: {
	                name: '',
	                email: '',
	                phone: '',
	                message: '',
	                timer: null,
	                hideinput: '',
	                checkbox: true
	            },
	            clients: [
	            	{img: require('./assets/img/clients-logo/intel.svg')},
	            	{img: require('./assets/img/clients-logo/microsoft.svg')},
	            	{img: require('./assets/img/clients-logo/wb.svg')},
	            	{img: require('./assets/img/clients-logo/subway.svg')},
	            	{img: require('./assets/img/clients-logo/snegur.svg')},
	            	{img: require('./assets/img/clients-logo/boldanic.svg')},
	            	{img: require('./assets/img/clients-logo/jaftea.svg')}
	            ],
				whats:[
					{
						title: "Привлечь и удержать внимание",
						desc: "Красочный визуальный ряд в среднем на 27% увеличивает время пребывания на сайте и задерживает взгляд на объекте рекламы или упаковке продукта",
						img: require('./assets/img/what/item-img-4.svg')
					},
					{
						title: "Создать ощущение обладания продуктом",
						desc: "Иллюстрация создает образ позитивного опыта и эмоций от покупки — наш анализ показывает рост продаж в среднем на 15% после добавления иллюстрации",
						img: require('./assets/img/what/item-img-2.svg')
					},
					{
						title: "Повысить конверсию",
						desc: "Статистика показывает, что яркий образ продукта увеличивает конверсию в 1,5 раза",
						img: require('./assets/img/what/item-img-3.svg')
					},
					{
						title: "Сформировать позитивную ассоциацию с брендом",
						desc: "Практика показывает, что любая крупная компания стремится максимально визуализировать свою ценность, для того чтобы люди ее запомнили",
						img: require('./assets/img/what/item-img-1.svg')
					}
				],
				works: [
					{
						title: 'Happy Holidays',
						desc: 'Лечение и профилактика железодефицитных <br>состояний у женщин',
						img: require('./assets/img/work/happy-holidays.jpg')
					},
					{
						title: 'Equium',
						desc: 'Сайт о БАДе, предназначенном для лечения и профилактики синдрома «менеджера» или бесконечной «обеспокоенности»',
						img: require('./assets/img/work/equium.jpg')
					},
					{
						title: 'Самогонщики',
						desc: 'Кей вижуал для инновационного препарата на основе тестостерона',
						img: require('./assets/img/work/sam.jpg')
					},
					{
						title: 'Subway',
						desc: 'Лечение и профилактика железодефицитных <br>состояний у женщин',
						img: require('./assets/img/work/subway.jpg')
					},
					{
						title: 'The Glass fruits & berries',
						desc: 'Сайт о БАДе, предназначенном для лечения и профилактики синдрома «менеджера» или бесконечной «обеспокоенности»',
						img: require('./assets/img/work/glass.jpg')
					},
					{
						title: 'Santa Claus',
						desc: 'Кей вижуал для инновационного препарата на основе тестостерона',
						img: require('./assets/img/work/sants.jpg')
					},
					{
						title: 'Tribulyze',
						desc: 'Лечение и профилактика железодефицитных <br>состояний у женщин',
						img: require('./assets/img/work/tribulize.jpg')
					},
					{
						title: 'Quartier',
						desc: 'Сайт о БАДе, предназначенном для лечения и профилактики синдрома «менеджера» или бесконечной «обеспокоенности»',
						img: require('./assets/img/work/quartire.jpg')
					}
				],
				stages: [
					'Детально изучаем продукт, рынок, конкурентов, целевую аудиторию.<br> Внимательно прислушиваемся к предпочтениям наших клиентов',
					'Создаем дизайн концепцию, готовим эскизы. Согласовываем в нюансах все детали',
					'Готовим финальный вариант, учитывая пожелания заказчика'
				],
				efficiency:[
					{
						title: "Увеличение времени пребывания на сайте, удержание аудитории и количество просмотров рекламы",
						img: require('./assets/img/effectiv/Vector.svg')
					},
					{
						title: "Создание идеальной иллюстрации для упаковки, которая будет привлекать внимание и повышать продажи",
						img: require('./assets/img/effectiv/Vector-1.svg')
					},
					{
						title: "Увеличение количества переходов по рекламным баннерам в интернете",
						img: require('./assets/img/effectiv/Vector-2.svg')
					},
					{
						title: "Передача ценности, стиля и духа бренда",
						img: require('./assets/img/effectiv/Vector-3.svg')
					}
				]
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
			showModal(){
				this.isModalActive = true;
				this.bodyChenge();
			},
			closeModal(){
				this.isModalActive = false;
				this.bodyChenge();
			},
			bodyChenge() {
				if (this.isModalActive) {
					document.querySelector("body").style.overflow = 'hidden'
				}else if(!this.isModalActive){
					document.querySelector("body").style.overflow = 'auto'
				}
			},
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
		components: {
			Menu,
			Modal
		},
	}
</script>
<style lang="scss">
	@import "./assets/sass/style.scss";
</style>
