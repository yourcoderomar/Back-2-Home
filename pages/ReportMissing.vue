<template>
  <div :class="{ 'blurred': showForm }">
    <NavBar />
    <q-page-container>
      <HeroSection :title="'Report a Missing Person'" />

      <div class="cta-container">
        <h2>Why Your Report Matters :</h2>
        <ul>
          <li><span>Time is Critical:</span> The sooner a missing person is reported, the higher the chances of finding them. Every second counts.</li>
          <li><span>Every Detail Helps:</span> Even the smallest piece of information—like the last known location, clothing, or recent activity—can be crucial in a search effort.</li>
          <li><span>A Community Effort:</span> When communities come together, missing persons are found faster. Your report could be the key to reuniting a family.</li>
        </ul>

        <h2>What You Can Do :</h2>
        <ul>
          <li><span>Report Immediately:</span> If someone you know has gone missing, don’t wait—file a report as soon as possible.</li>
          <li><span>Share Any Information:</span> If you have seen or heard anything that could help locate a missing person, your input is valuable.</li>
          <li><span>Don’t Hesitate:</span> Even if you are unsure whether the information is relevant, it’s better to report than to stay silent. Your details could be the missing piece.</li>
        </ul>

        <h2>Take Action Now!</h2>
        <p>If you have any details about a missing person, please submit a report. Every report is reviewed with urgency, and your information could make a life-changing difference.</p>
        <q-btn label="Report Now" @click="showForm = true" class="submit" />
      </div>

      <!-- Form Dialog -->
      <q-dialog v-model="showForm" persistent>
        <div class="form-container">
          <ReusableForm
            :title="'Report Missing Person'"
            :message="'Please fill out the form to proceed.'"
            :fields="fields"
            :initialValues="formValues"
            :link-text="'Already filled a report?'"
            :link-to="'/'"
            @formSubmitted="handleFormSubmission"
            @closeForm="showForm = false" 
            class="form"
          />
        </div>
      </q-dialog>
    </q-page-container>
    <FooterComponent />
  </div>
</template>

<script>
import ReusableForm from 'components/ReusableForm.vue';
import NavBar from 'src/components/NavBar.vue';
import FooterComponent from '../components/Footer.vue';
import HeroSection from 'src/components/HeroSection.vue';

export default {
  components: {
    ReusableForm,
    NavBar,
    FooterComponent,
    HeroSection,
  },
  data() {
    return {
      showForm: false,
      formValues: {
        user_national_id: '',
        missing_person_name: '',
        report_gender: '',
        report_age: '',
        last_seen_location: '',
        last_seen_date: '',
      },
      fields: [
        { 
          name: 'user_national_id', 
          label: 'Your National ID', 
          type: 'text', 
          required: true, 
          width: '100%', 
          rules: [
            val => !!val || 'National ID is required',
            val => /^\d{14}$/.test(val) || 'Must be a 14-digit number'
          ] 
        },
        { 
          name: 'missing_person_name', 
          label: 'Missing Person Name', 
          type: 'text', 
          required: true, 
          width: '100%', 
          rules: [val => !!val || 'Name is required'] 
        },
        { 
          name: 'report_gender', 
          label: 'Gender', 
          type: 'select', 
          options: ['Male', 'Female'], 
          width: '40%',
          rules: [val => !!val || 'Gender is required']
        },
        { 
          name: 'report_age', 
          label: 'Age', 
          type: 'number', 
          width: '40%', 
          rules: [
            val => !!val || 'Age is required',
            val => (val > 0 && val < 150) || 'Enter a valid age'
          ] 
        },
        { 
          name: 'last_seen_location', 
          label: 'Last Seen Location', 
          type: 'text', 
          width: '100%',
          rules: [val => !!val || 'Location is required']
        },
        { 
          name: 'last_seen_date', 
          label: 'Last Seen Date', 
          type: 'date', 
          width: '100%',
          rules: [val => !!val || 'Date is required']
        },
      ],
    };
  },
  methods: {
    handleFormSubmission(formData) {
      console.log('Form Data:', formData);
      this.showForm = false; // Close form after submission
    },
  },
};
</script>

<style scoped>
.blurred {
  filter: blur(2px);
  pointer-events: none;
  user-select: none;
}

.form-container {
  background: transparent;
  border-radius: 12px;
}

.form-container::-webkit-scrollbar {
  display: none;
}

.cta-container {
  text-align: left;
  padding: 40px;
  margin: auto;
  background-color: #49596b;
}

.cta-container h2,
.cta-container h3 {
  color: #f2f0e9;
  font-size: 32px;
}

.cta-container ul {
  padding: 0;
}

.cta-container ul li {
  color: #f2f0e9;
  font-size: 14px;
  margin-bottom: 10px;
}

.cta-container p {
  color: #f2f0e9;
  font-size: 16px;
  margin-bottom: 15px;
}

.q-btn {
  font-size: 18px;
  padding: 10px 20px;
}
</style>
