```

     / \__
   (    @\___
   /         O
 /   (_____/
/_____/ U


```


# PetCover

The app allows pet owners to identify insurance plans offered by different providers in the UK, helping them make informed decisions about their pet's healthcare coverage.

### Core Features
  1.1. Insurance Provider Listings: Display a list of pet insurance providers available in the UK, including company name, logo, and brief description.\
  1.2. Insurance Plan Comparison: Allow users to compare insurance plans offered by different providers.\
  1.3. User Authentication and Profiles: Enable users to securely create accounts, log in, and save comparison results and favourite plans.
  
### Enhanced Features
 2.1. Quote Generation: Generate insurance quotes based on user input, such as pet details (species, age, breed).\
 2.2. Alerts: Notify users when their pet's policy is nearing expiration.\
 2.3. Pet Insurance API: Integrate with external APIs to fetch real-time insurance data, quotes, or additional information from insurance providers

### Technologies Used
**React**: the frontend framework for building the user interface. Use ```axios``` library to make HTTP requests to the Spring Boot application.\
**Spring Boot**: the backend framework for handling server-side logic and APIs. The React application can communicate with the backend if CORS (Cross-Origin Resource Sharing) is enabled in Spring Boot.\
**MongoDB**: the NoSQL database for storing insurance provider and plan data.

![image](https://github.com/Cristina-Pat/pet-cover/assets/72979214/46af1974-27f5-4708-b937-6089db0e8df0)

### Wireframes

#### Home Page

![image](https://github.com/Cristina-Pat/pet-cover/blob/main/docs/images/HomePage%20PetCover.JPG)
*Figure 1. Home Page Wireframe*



### Comnponent Hierarchy

#### Home Page

*Figure . Home Page Component Hirerarcy*

### Class Diagram: Cat

```mermaid
classDiagram
    Cat --> MedicalRecord : has
    Cat --> InsurancePolicy : has

    class Cat {
        +String id
        +String name
        +String breed
        +Int age
        +String owner
        +List<MedicalRecord> medicalHistory
        +InsurancePolicy insurancePolicy

        +getDetails() String
        +addMedicalRecord(record: MedicalRecord) void
        +updateInsurancePolicy(policy: InsurancePolicy) void
        +calculateAgeInHumanYears() Int
    }

    class MedicalRecord {
        +Date date
        +String description
        +String treatment
        +Double cost

        +getSummary() String
    }

    class InsurancePolicy {
        +String policyNumber
        +String provider
        +String coverageDetails
        +Date expirationDate
        +Double premium

        +renewPolicy(newExpirationDate: Date) void
        +getPolicyInfo() String
    }





