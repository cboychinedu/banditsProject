
```mermaid
graph TD
    subgraph User Interaction
        A[Mobile App]
    end

    subgraph Backend
        B[Backend API]
        C[Database]
        D[Image Analysis]
    end

    subgraph Data
        E[Dataset]
        F[Machine Learning Model]
    end

    A -->|HTTP Requests| B
    B -->|CRUD Operations| C
    B -->|Image Processing| D
    D -->|Object Detection| F
    E -->|Training| F

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ccf,stroke:#333,stroke-width:2px
    style C fill:#9cf,stroke:#333,stroke-width:2px
    style D fill:#c9f,stroke:#333,stroke-width:2px
    style E fill:#f9c,stroke:#333,stroke-width:2px
    style F fill:#f69,stroke:#333,stroke-width:2px
```

This diagram illustrates the following flow:
1. The user interacts with the **Mobile App**.
2. The **Mobile App** sends requests to the **Backend API**.
3. The **Backend API** processes requests, interacts with the **Database**, and uses the **Image Analysis** module.
4. The **Image Analysis** module uses a **Machine Learning Model** for object detection.
5. The **Machine Learning Model** is trained on the **Dataset**.
