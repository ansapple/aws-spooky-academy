// AWS Certificate Cat Game - Questions Database
const questionBank = {
    fundamentals: [
        {
            question: "What does AWS stand for?",
            answers: [
                "Amazon Web Services",
                "Amazon Website Solutions", 
                "Advanced Web Systems",
                "Automated Web Services"
            ],
            correct: 0,
            explanation: "AWS stands for Amazon Web Services, Amazon's comprehensive cloud computing platform! 🐱"
        },
        {
            question: "Which of the following is a benefit of cloud computing?",
            answers: [
                "Higher upfront costs",
                "Limited scalability",
                "Pay-as-you-go pricing",
                "Fixed capacity"
            ],
            correct: 2,
            explanation: "Cloud computing offers pay-as-you-go pricing, so you only pay for what you use - just like feeding cats when they're hungry! 🍽️"
        },
        {
            question: "What is the AWS Free Tier?",
            answers: [
                "A premium support plan",
                "Free usage of certain AWS services for new customers",
                "A certification program",
                "A type of EC2 instance"
            ],
            correct: 1,
            explanation: "The AWS Free Tier gives new customers free access to many AWS services for 12 months - perfect for learning! 📚"
        },
        {
            question: "Which AWS service provides object storage?",
            answers: [
                "EC2",
                "RDS",
                "S3",
                "Lambda"
            ],
            correct: 2,
            explanation: "Amazon S3 (Simple Storage Service) provides object storage - think of it as a giant toy box for your data! 🧸"
        },
        {
            question: "What is an AWS Region?",
            answers: [
                "A single data center",
                "A geographical area with multiple data centers",
                "A type of security group",
                "A billing category"
            ],
            correct: 1,
            explanation: "An AWS Region is a geographical area with multiple data centers, like different neighborhoods where cats live! 🏘️"
        },
        {
            question: "What is the AWS Management Console?",
            answers: [
                "A command-line tool",
                "A web-based interface for managing AWS services",
                "A mobile app only",
                "A desktop application"
            ],
            correct: 1,
            explanation: "The AWS Management Console is a web-based interface - like a cozy dashboard where you can manage all your cloud resources! 💻"
        },
        {
            question: "Which principle is part of the AWS Well-Architected Framework?",
            answers: [
                "Operational Excellence",
                "Maximum Complexity",
                "Vendor Lock-in",
                "Single Point of Failure"
            ],
            correct: 0,
            explanation: "Operational Excellence is one of the five pillars of the AWS Well-Architected Framework - like keeping your cat's environment clean and organized! ✨"
        },
        {
            question: "What does 'elasticity' mean in cloud computing?",
            answers: [
                "The ability to stretch rubber bands",
                "Fixed resource allocation",
                "The ability to scale resources up or down automatically",
                "Manual resource management"
            ],
            correct: 2,
            explanation: "Elasticity means automatically scaling resources up or down based on demand - like a cat stretching when it wakes up! 🐱‍⬅️"
        },
        {
            question: "Which AWS service provides virtual servers?",
            answers: [
                "S3",
                "EC2",
                "RDS",
                "CloudFront"
            ],
            correct: 1,
            explanation: "Amazon EC2 (Elastic Compute Cloud) provides virtual servers - like virtual homes for your applications! 🏠"
        },
        {
            question: "What is the shared responsibility model in AWS?",
            answers: [
                "AWS is responsible for everything",
                "Customers are responsible for everything", 
                "AWS and customers share security responsibilities",
                "Only third parties are responsible"
            ],
            correct: 2,
            explanation: "The shared responsibility model means AWS and customers share security responsibilities - like how you and your cat both keep the house safe! 🛡️"
        }
    ],

    compute: [
        {
            question: "What does EC2 stand for?",
            answers: [
                "Elastic Compute Cloud",
                "Enhanced Computing Center",
                "Electronic Commerce Cloud",
                "Efficient Container Cluster"
            ],
            correct: 0,
            explanation: "EC2 stands for Elastic Compute Cloud - it's like having a flexible computer that can grow or shrink like a cat stretching! 🐱"
        },
        {
            question: "Which EC2 instance type is best for general-purpose workloads?",
            answers: [
                "C5 (Compute Optimized)",
                "R5 (Memory Optimized)",
                "T3 (Burstable Performance)",
                "P3 (GPU Instances)"
            ],
            correct: 2,
            explanation: "T3 instances are great for general-purpose workloads with burstable performance - like a cat that can sprint when needed but usually lounges! 😴"
        },
        {
            question: "What is an AMI in AWS?",
            answers: [
                "Amazon Machine Image",
                "Automated Management Interface",
                "Advanced Monitoring Integration",
                "Application Memory Instance"
            ],
            correct: 0,
            explanation: "An AMI (Amazon Machine Image) is like a photo of your computer setup that you can use to create identical copies - like cloning your favorite cat! 📸"
        },
        {
            question: "Which storage type provides the highest IOPS for EC2?",
            answers: [
                "General Purpose SSD (gp2)",
                "Provisioned IOPS SSD (io1)",
                "Throughput Optimized HDD (st1)",
                "Cold HDD (sc1)"
            ],
            correct: 1,
            explanation: "Provisioned IOPS SSD (io1) provides the highest IOPS - like giving your cat the fastest reflexes for catching laser pointers! ⚡"
        },
        {
            question: "What is Auto Scaling in AWS?",
            answers: [
                "Manually adding servers",
                "Automatically adjusting the number of EC2 instances",
                "Scaling storage only",
                "A billing feature"
            ],
            correct: 1,
            explanation: "Auto Scaling automatically adjusts EC2 instances based on demand - like having more cats appear when there's more food to share! 🍽️"
        },
        {
            question: "What is an Elastic Load Balancer?",
            answers: [
                "A storage service",
                "A service that distributes incoming traffic across multiple targets",
                "A monitoring tool",
                "A security service"
            ],
            correct: 1,
            explanation: "An Elastic Load Balancer distributes traffic across multiple targets - like a cat distributing attention equally among all their toys! ⚖️"
        },
        {
            question: "Which EC2 pricing model offers the lowest cost for predictable workloads?",
            answers: [
                "On-Demand",
                "Reserved Instances",
                "Spot Instances", 
                "Dedicated Hosts"
            ],
            correct: 1,
            explanation: "Reserved Instances offer the lowest cost for predictable workloads - like getting a discount for promising to feed your cat regularly! 💰"
        },
        {
            question: "What is EC2 User Data?",
            answers: [
                "Personal information about users",
                "Scripts that run when an instance starts",
                "Instance monitoring data",
                "Billing information"
            ],
            correct: 1,
            explanation: "EC2 User Data contains scripts that run when an instance starts - like giving your cat instructions for what to do when you wake up! 📝"
        },
        {
            question: "What is the difference between stopping and terminating an EC2 instance?",
            answers: [
                "No difference",
                "Stopping preserves the instance, terminating deletes it permanently",
                "Terminating preserves the instance, stopping deletes it",
                "Both delete the instance permanently"
            ],
            correct: 1,
            explanation: "Stopping is like putting your cat to sleep (they wake up later), terminating is permanent - choose wisely! 😴"
        },
        {
            question: "What is Amazon ECS?",
            answers: [
                "Elastic Container Service",
                "Enhanced Computing System",
                "Elastic Cache Service",
                "Electronic Commerce Solution"
            ],
            correct: 0,
            explanation: "Amazon ECS (Elastic Container Service) manages Docker containers - like organizing different cat breeds in separate, cozy containers! 📦"
        }
    ],

    storage: [
        {
            question: "What does S3 stand for?",
            answers: [
                "Simple Storage Service",
                "Secure Storage System",
                "Scalable Storage Solution",
                "Standard Storage Service"
            ],
            correct: 0,
            explanation: "S3 stands for Simple Storage Service - it's like a magical toy chest that can hold unlimited cat toys! 🧸"
        },
        {
            question: "What is the maximum size of a single object in S3?",
            answers: [
                "5 GB",
                "5 TB", 
                "100 GB",
                "1 TB"
            ],
            correct: 1,
            explanation: "The maximum size for a single S3 object is 5 TB - that's enough space for millions of cat photos! 📸"
        },
        {
            question: "Which S3 storage class is most cost-effective for infrequently accessed data?",
            answers: [
                "Standard",
                "Standard-IA",
                "Glacier",
                "Reduced Redundancy"
            ],
            correct: 1,
            explanation: "Standard-IA (Infrequent Access) is perfect for data you don't need often - like your cat's old toys that they might want someday! 🎾"
        },
        {
            question: "What is S3 versioning?",
            answers: [
                "A backup service",
                "Keeping multiple versions of the same object",
                "A security feature",
                "A monitoring tool"
            ],
            correct: 1,
            explanation: "S3 versioning keeps multiple versions of objects - like keeping all the different photos of your cat as they grow up! 📷"
        },
        {
            question: "What is Amazon EBS?",
            answers: [
                "Elastic Block Store",
                "Enhanced Backup System",
                "Elastic Bean Stalk",
                "Electronic Business Service"
            ],
            correct: 0,
            explanation: "Amazon EBS (Elastic Block Store) provides persistent block storage - like a dedicated toy box that stays with your cat's favorite EC2 home! 📦"
        },
        {
            question: "Which EBS volume type provides the highest performance?",
            answers: [
                "General Purpose SSD (gp2)",
                "Provisioned IOPS SSD (io1)",
                "Throughput Optimized HDD (st1)",
                "Cold HDD (sc1)"
            ],
            correct: 1,
            explanation: "Provisioned IOPS SSD (io1) provides the highest performance - like giving your cat the fastest running shoes! 👟"
        },
        {
            question: "What is Amazon EFS?",
            answers: [
                "Elastic File System",
                "Enhanced File Storage",
                "Encrypted File Service",
                "Electronic File System"
            ],
            correct: 0,
            explanation: "Amazon EFS (Elastic File System) provides shared file storage - like a communal cat playground that multiple cats can use! 🎪"
        },
        {
            question: "What is S3 Cross-Region Replication?",
            answers: [
                "Copying objects to different regions automatically",
                "A backup service",
                "A security feature",
                "A monitoring tool"
            ],
            correct: 0,
            explanation: "Cross-Region Replication automatically copies objects to different regions - like having backup homes for your cat in different cities! 🏠"
        },
        {
            question: "What is the difference between S3 and EBS?",
            answers: [
                "No difference",
                "S3 is object storage, EBS is block storage",
                "S3 is block storage, EBS is object storage",
                "Both are the same type of storage"
            ],
            correct: 1,
            explanation: "S3 is object storage (like a photo album), EBS is block storage (like a hard drive) - different tools for different cat needs! 💾"
        },
        {
            question: "What is Amazon Glacier?",
            answers: [
                "A CDN service",
                "Long-term archival storage",
                "A database service",
                "A compute service"
            ],
            correct: 1,
            explanation: "Amazon Glacier is for long-term archival storage - like storing your cat's baby photos in a safe place for years! 🗄️"
        }
    ],

    networking: [
        {
            question: "What does VPC stand for?",
            answers: [
                "Virtual Private Cloud",
                "Very Private Connection",
                "Virtual Public Cloud",
                "Verified Private Channel"
            ],
            correct: 0,
            explanation: "VPC stands for Virtual Private Cloud - it's like creating a private neighborhood just for your cats! 🏘️"
        },
        {
            question: "What is a subnet in AWS?",
            answers: [
                "A type of security group",
                "A range of IP addresses in your VPC",
                "A load balancer",
                "A storage service"
            ],
            correct: 1,
            explanation: "A subnet is a range of IP addresses in your VPC - like different rooms in your cat's house! 🏠"
        },
        {
            question: "What is an Internet Gateway?",
            answers: [
                "A security service",
                "A component that allows communication between your VPC and the internet",
                "A type of load balancer",
                "A monitoring tool"
            ],
            correct: 1,
            explanation: "An Internet Gateway connects your VPC to the internet - like a cat door that lets your cats go outside! 🚪"
        },
        {
            question: "What is a NAT Gateway?",
            answers: [
                "A security group",
                "Allows outbound internet access for private subnets",
                "A load balancer",
                "A storage service"
            ],
            correct: 1,
            explanation: "A NAT Gateway allows private subnets to access the internet for outbound traffic - like a one-way cat door! ➡️"
        },
        {
            question: "What is a Security Group?",
            answers: [
                "A virtual firewall for instances",
                "A user management system",
                "A monitoring service",
                "A storage encryption method"
            ],
            correct: 0,
            explanation: "A Security Group is a virtual firewall that controls traffic to instances - like a bouncer that decides which cats can enter! 🛡️"
        },
        {
            question: "What is the difference between Security Groups and NACLs?",
            answers: [
                "No difference",
                "Security Groups are stateful, NACLs are stateless",
                "Security Groups are stateless, NACLs are stateful",
                "Both are stateful"
            ],
            correct: 1,
            explanation: "Security Groups remember connections (stateful), NACLs check every packet (stateless) - like a cat that remembers friends vs. checking everyone! 🤔"
        },
        {
            question: "What is Amazon CloudFront?",
            answers: [
                "A compute service",
                "A content delivery network (CDN)",
                "A database service",
                "A storage service"
            ],
            correct: 1,
            explanation: "CloudFront is a CDN that delivers content faster - like having cat food stations around the world for quick snacks! 🌍"
        },
        {
            question: "What is Route 53?",
            answers: [
                "A VPC service",
                "AWS's DNS service",
                "A load balancer",
                "A security service"
            ],
            correct: 1,
            explanation: "Route 53 is AWS's DNS service - like a phone book that helps find where your cat's favorite websites live! 📞"
        },
        {
            question: "What is VPC Peering?",
            answers: [
                "Connecting two VPCs together",
                "A security feature",
                "A monitoring tool",
                "A storage service"
            ],
            correct: 0,
            explanation: "VPC Peering connects two VPCs - like building a bridge between two cat neighborhoods so they can visit each other! 🌉"
        },
        {
            question: "What is an Elastic IP?",
            answers: [
                "A dynamic IP address",
                "A static public IP address",
                "A private IP address",
                "A load balancer IP"
            ],
            correct: 1,
            explanation: "An Elastic IP is a static public IP address - like giving your cat a permanent address that never changes! 📮"
        }
    ],

    security: [
        {
            question: "What does IAM stand for?",
            answers: [
                "Internet Access Management",
                "Identity and Access Management",
                "Internal Application Management",
                "Integrated Account Management"
            ],
            correct: 1,
            explanation: "IAM stands for Identity and Access Management - it's like a smart cat door that knows which cats are allowed in! 🔐"
        },
        {
            question: "What is an IAM role?",
            answers: [
                "A permanent user account",
                "A set of permissions that can be assumed temporarily",
                "A type of security group",
                "A monitoring service"
            ],
            correct: 1,
            explanation: "An IAM role is a set of permissions that can be assumed temporarily - like letting a friend cat borrow your food bowl! 🍽️"
        },
        {
            question: "What is the principle of least privilege?",
            answers: [
                "Give users maximum permissions",
                "Give users only the minimum permissions needed",
                "Give no permissions to anyone",
                "Give random permissions"
            ],
            correct: 1,
            explanation: "Least privilege means giving only minimum needed permissions - like only letting cats access their own food, not everyone's! 🥘"
        },
        {
            question: "What is AWS KMS?",
            answers: [
                "Key Management Service",
                "Kernel Management System",
                "Knowledge Management Service",
                "Kinetic Monitoring Service"
            ],
            correct: 0,
            explanation: "AWS KMS (Key Management Service) manages encryption keys - like a secure key holder for all your cat's secret hiding spots! 🗝️"
        },
        {
            question: "What is Amazon Cognito?",
            answers: [
                "A compute service",
                "User identity and authentication service",
                "A storage service",
                "A monitoring tool"
            ],
            correct: 1,
            explanation: "Amazon Cognito handles user identity and authentication - like a smart collar that identifies which cat is which! 🏷️"
        },
        {
            question: "What is AWS CloudTrail?",
            answers: [
                "A CDN service",
                "API logging and monitoring service",
                "A compute service",
                "A storage service"
            ],
            correct: 1,
            explanation: "CloudTrail logs API calls and activities - like keeping a diary of everything your cats do throughout the day! 📔"
        },
        {
            question: "What is encryption in transit?",
            answers: [
                "Encrypting data while it's stored",
                "Encrypting data while it's being transmitted",
                "Encrypting user passwords",
                "Encrypting database backups"
            ],
            correct: 1,
            explanation: "Encryption in transit protects data while it travels - like putting your cat in a secure carrier during car rides! 🚗"
        },
        {
            question: "What is encryption at rest?",
            answers: [
                "Encrypting data while it's being transmitted",
                "Encrypting data while it's stored",
                "Encrypting network traffic",
                "Encrypting user sessions"
            ],
            correct: 1,
            explanation: "Encryption at rest protects stored data - like keeping your cat's treats in a locked cabinet! 🔒"
        },
        {
            question: "What is AWS WAF?",
            answers: [
                "Web Application Firewall",
                "Wide Area Framework",
                "Wireless Access Filter",
                "Web Analytics Framework"
            ],
            correct: 0,
            explanation: "AWS WAF (Web Application Firewall) protects web applications - like a security guard that keeps bad cats away from your website! 🛡️"
        },
        {
            question: "What is multi-factor authentication (MFA)?",
            answers: [
                "Using only a password",
                "Using multiple authentication methods",
                "Using biometric authentication only",
                "Using no authentication"
            ],
            correct: 1,
            explanation: "MFA uses multiple authentication methods - like requiring both a key AND a secret meow to enter the cat house! 🔑"
        }
    ],

    serverless: [
        {
            question: "What is AWS Lambda?",
            answers: [
                "A virtual server service",
                "A serverless compute service",
                "A database service",
                "A storage service"
            ],
            correct: 1,
            explanation: "AWS Lambda is a serverless compute service - like having a magical cat that appears only when you need help, then disappears! ✨"
        },
        {
            question: "What is the maximum execution time for a Lambda function?",
            answers: [
                "5 minutes",
                "10 minutes",
                "15 minutes",
                "30 minutes"
            ],
            correct: 2,
            explanation: "Lambda functions can run for a maximum of 15 minutes - enough time for a good cat nap! 😴"
        },
        {
            question: "What triggers can invoke a Lambda function?",
            answers: [
                "S3 events only",
                "API Gateway only",
                "Multiple AWS services and events",
                "Manual invocation only"
            ],
            correct: 2,
            explanation: "Lambda can be triggered by many AWS services - like a cat that responds to different types of calls! 📞"
        },
        {
            question: "What is Amazon API Gateway?",
            answers: [
                "A compute service",
                "A service for creating and managing APIs",
                "A storage service",
                "A database service"
            ],
            correct: 1,
            explanation: "API Gateway creates and manages APIs - like a smart doorbell that handles all visitors to your cat's house! 🚪"
        },
        {
            question: "What is serverless architecture?",
            answers: [
                "Architecture without any servers",
                "Architecture where you don't manage servers",
                "Architecture with only physical servers",
                "Architecture with dedicated servers"
            ],
            correct: 1,
            explanation: "Serverless means you don't manage servers - like having invisible helpers take care of your cat while you're away! 👻"
        },
        {
            question: "What is AWS Step Functions?",
            answers: [
                "A compute service",
                "A workflow orchestration service",
                "A storage service",
                "A monitoring service"
            ],
            correct: 1,
            explanation: "Step Functions orchestrate workflows - like creating a step-by-step routine for your cat's daily activities! 📋"
        },
        {
            question: "What is the AWS Lambda runtime?",
            answers: [
                "The execution environment for Lambda functions",
                "The maximum execution time",
                "The memory allocation",
                "The pricing model"
            ],
            correct: 0,
            explanation: "Lambda runtime is the execution environment - like the cozy bed where your cat's code takes its nap! 🛏️"
        },
        {
            question: "What is cold start in Lambda?",
            answers: [
                "Starting Lambda in winter",
                "The delay when a function runs for the first time",
                "A type of error",
                "A security feature"
            ],
            correct: 1,
            explanation: "Cold start is the initial delay when Lambda wakes up - like when your cat takes a moment to stretch after a nap! 🥱"
        },
        {
            question: "What is Amazon DynamoDB?",
            answers: [
                "A relational database",
                "A NoSQL database service",
                "A file storage service",
                "A compute service"
            ],
            correct: 1,
            explanation: "DynamoDB is a NoSQL database - like a flexible toy box that can store different types of cat toys without strict organization! 📦"
        },
        {
            question: "What is AWS SAM?",
            answers: [
                "Serverless Application Model",
                "Simple Access Management",
                "Secure Application Monitoring",
                "Scalable Application Manager"
            ],
            correct: 0,
            explanation: "AWS SAM (Serverless Application Model) helps build serverless apps - like a blueprint for building the perfect cat playground! 📐"
        }
    ],

    databases: [
        {
            question: "What does RDS stand for?",
            answers: [
                "Relational Database Service",
                "Remote Data Storage",
                "Rapid Database System",
                "Real-time Data Service"
            ],
            correct: 0,
            explanation: "RDS stands for Relational Database Service - it's like a well-organized filing cabinet for your cat's important information! 📁"
        },
        {
            question: "Which database engines are supported by Amazon RDS?",
            answers: [
                "MySQL only",
                "PostgreSQL only",
                "MySQL, PostgreSQL, Oracle, SQL Server, MariaDB, and Aurora",
                "MongoDB only"
            ],
            correct: 2,
            explanation: "RDS supports multiple database engines - like having different types of food bowls for different cat preferences! 🍽️"
        },
        {
            question: "What is Amazon DynamoDB?",
            answers: [
                "A relational database",
                "A NoSQL database service",
                "A data warehouse",
                "A file storage service"
            ],
            correct: 1,
            explanation: "DynamoDB is a NoSQL database - like a flexible toy chest that can store any type of cat toy without strict rules! 🧸"
        },
        {
            question: "What is Amazon Aurora?",
            answers: [
                "A NoSQL database",
                "A MySQL and PostgreSQL-compatible relational database",
                "A data warehouse",
                "A caching service"
            ],
            correct: 1,
            explanation: "Aurora is a high-performance relational database - like a super-fast food dispenser that never runs out of treats! ⚡"
        },
        {
            question: "What is Amazon ElastiCache?",
            answers: [
                "A relational database",
                "An in-memory caching service",
                "A file storage service",
                "A backup service"
            ],
            correct: 1,
            explanation: "ElastiCache provides in-memory caching - like keeping your cat's favorite toys within easy reach for quick play! 🎾"
        },
        {
            question: "What is Amazon Redshift?",
            answers: [
                "A NoSQL database",
                "A data warehouse service",
                "A caching service",
                "A file storage service"
            ],
            correct: 1,
            explanation: "Redshift is a data warehouse service - like a huge library where you can analyze all your cat behavior patterns! 📚"
        },
        {
            question: "What is a Multi-AZ deployment in RDS?",
            answers: [
                "Deploying across multiple regions",
                "Deploying across multiple availability zones for high availability",
                "Deploying multiple database engines",
                "Deploying multiple instances"
            ],
            correct: 1,
            explanation: "Multi-AZ deployment provides high availability across zones - like having backup cat sitters in different neighborhoods! 🏠"
        },
        {
            question: "What is a Read Replica in RDS?",
            answers: [
                "A backup database",
                "A read-only copy of your database",
                "A different database engine",
                "A caching layer"
            ],
            correct: 1,
            explanation: "Read Replicas are read-only copies - like having multiple photo albums of your cat that friends can look at but not edit! 📸"
        },
        {
            question: "What is DynamoDB Global Tables?",
            answers: [
                "Tables with global permissions",
                "Multi-region, multi-master replication",
                "Very large tables",
                "Tables for global users only"
            ],
            correct: 1,
            explanation: "Global Tables provide multi-region replication - like having synchronized cat diaries in different cities! 🌍"
        },
        {
            question: "What is Amazon DocumentDB?",
            answers: [
                "A relational database",
                "A MongoDB-compatible document database",
                "A file storage service",
                "A data warehouse"
            ],
            correct: 1,
            explanation: "DocumentDB is MongoDB-compatible - like a special notebook designed for storing cat stories and adventures! 📖"
        }
    ],

    monitoring: [
        {
            question: "What is Amazon CloudWatch?",
            answers: [
                "A security service",
                "A monitoring and observability service",
                "A storage service",
                "A compute service"
            ],
            correct: 1,
            explanation: "CloudWatch monitors your AWS resources - like a caring pet owner who keeps track of their cat's health and activities! 👀"
        },
        {
            question: "What are CloudWatch Metrics?",
            answers: [
                "Security measurements",
                "Performance data points collected over time",
                "Storage capacity measurements",
                "Network speed tests"
            ],
            correct: 1,
            explanation: "CloudWatch Metrics are performance data points - like keeping track of how many treats your cat eats each day! 📊"
        },
        {
            question: "What is AWS CloudTrail?",
            answers: [
                "A monitoring service for applications",
                "An API logging service that records AWS API calls",
                "A network monitoring tool",
                "A storage service"
            ],
            correct: 1,
            explanation: "CloudTrail logs API calls - like keeping a detailed diary of every action your cat takes throughout the day! 📔"
        },
        {
            question: "What is AWS X-Ray?",
            answers: [
                "A medical imaging service",
                "A distributed tracing service for applications",
                "A security scanning tool",
                "A backup service"
            ],
            correct: 1,
            explanation: "X-Ray traces requests through your application - like following your cat's path through the house to see where they go! 🔍"
        },
        {
            question: "What are CloudWatch Alarms?",
            answers: [
                "Security alerts only",
                "Notifications triggered when metrics breach thresholds",
                "Storage capacity warnings",
                "Network connectivity alerts"
            ],
            correct: 1,
            explanation: "CloudWatch Alarms notify you when metrics exceed thresholds - like getting an alert when your cat's food bowl is empty! 🚨"
        },
        {
            question: "What is Amazon EventBridge?",
            answers: [
                "A networking service",
                "A serverless event bus service",
                "A storage service",
                "A compute service"
            ],
            correct: 1,
            explanation: "EventBridge is an event bus - like a smart message system that tells different parts of your house when your cat does something! 📨"
        },
        {
            question: "What is AWS Config?",
            answers: [
                "A configuration management service",
                "A service that tracks resource configurations and compliance",
                "A network configuration tool",
                "A security configuration service"
            ],
            correct: 1,
            explanation: "AWS Config tracks resource configurations - like keeping a record of how your cat's playground is set up and if it meets safety rules! ⚙️"
        },
        {
            question: "What are CloudWatch Logs?",
            answers: [
                "Security audit logs only",
                "A service for monitoring, storing, and accessing log files",
                "Network traffic logs",
                "Database transaction logs"
            ],
            correct: 1,
            explanation: "CloudWatch Logs store and monitor log files - like keeping all your cat's daily activity reports in one organized place! 📝"
        },
        {
            question: "What is AWS Systems Manager?",
            answers: [
                "A database management tool",
                "A service for managing AWS resources and on-premises systems",
                "A network management service",
                "A storage management tool"
            ],
            correct: 1,
            explanation: "Systems Manager helps manage your infrastructure - like having a smart home system that takes care of your cat's environment! 🏠"
        },
        {
            question: "What is Amazon CloudWatch Insights?",
            answers: [
                "A security analysis tool",
                "A log analysis service for searching and analyzing log data",
                "A network analysis service",
                "A cost analysis tool"
            ],
            correct: 1,
            explanation: "CloudWatch Insights analyzes log data - like having a detective that can find patterns in your cat's behavior from their activity logs! 🕵️"
        }
    ],

    devops: [
        {
            question: "What is AWS CodeCommit?",
            answers: [
                "A deployment service",
                "A Git-based source control service",
                "A build service",
                "A monitoring service"
            ],
            correct: 1,
            explanation: "CodeCommit is a Git repository service - like a secure diary where you keep all versions of your cat care instructions! 📚"
        },
        {
            question: "What is AWS CodeBuild?",
            answers: [
                "A source control service",
                "A fully managed build service",
                "A deployment service",
                "A testing service"
            ],
            correct: 1,
            explanation: "CodeBuild compiles and tests your code - like having a robot assistant that prepares your cat's meals exactly right every time! 🤖"
        },
        {
            question: "What is AWS CodeDeploy?",
            answers: [
                "A build service",
                "A deployment service that automates application deployments",
                "A source control service",
                "A monitoring service"
            ],
            correct: 1,
            explanation: "CodeDeploy automates deployments - like having a system that automatically updates your cat's toys when new ones arrive! 🚀"
        },
        {
            question: "What is AWS CodePipeline?",
            answers: [
                "A monitoring service",
                "A continuous integration and delivery service",
                "A storage service",
                "A compute service"
            ],
            correct: 1,
            explanation: "CodePipeline orchestrates your CI/CD workflow - like an assembly line that automatically prepares and delivers your cat's daily routine! 🏭"
        },
        {
            question: "What is AWS CloudFormation?",
            answers: [
                "A monitoring service",
                "Infrastructure as Code service",
                "A deployment service",
                "A security service"
            ],
            correct: 1,
            explanation: "CloudFormation manages infrastructure as code - like having blueprints that can automatically build your cat's perfect playground! 📐"
        },
        {
            question: "What is AWS Elastic Beanstalk?",
            answers: [
                "A container service",
                "A platform service for deploying web applications",
                "A database service",
                "A monitoring service"
            ],
            correct: 1,
            explanation: "Elastic Beanstalk simplifies application deployment - like a magic box where you put your cat app and it handles all the setup! ✨"
        },
        {
            question: "What is Amazon ECS?",
            answers: [
                "Elastic Container Service",
                "Enhanced Computing System",
                "Elastic Cache Service",
                "Electronic Commerce Solution"
            ],
            correct: 0,
            explanation: "ECS manages Docker containers - like organizing different cat breeds in separate, comfortable containers with everything they need! 📦"
        },
        {
            question: "What is Amazon EKS?",
            answers: [
                "Elastic Kubernetes Service",
                "Enhanced Key Storage",
                "Elastic Kinesis Service",
                "Electronic Knowledge System"
            ],
            correct: 0,
            explanation: "EKS is managed Kubernetes - like having a sophisticated cat hotel manager that coordinates all the different cat services! 🏨"
        },
        {
            question: "What is AWS Fargate?",
            answers: [
                "A virtual machine service",
                "Serverless compute for containers",
                "A database service",
                "A storage service"
            ],
            correct: 1,
            explanation: "Fargate runs containers without managing servers - like having invisible helpers that take care of your cat containers automatically! 👻"
        },
        {
            question: "What is Infrastructure as Code (IaC)?",
            answers: [
                "Writing code for applications",
                "Managing infrastructure through code and templates",
                "Coding for databases",
                "Writing security policies"
            ],
            correct: 1,
            explanation: "IaC manages infrastructure through code - like having written instructions that can automatically build your cat's entire living environment! 📋"
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionBank;
}