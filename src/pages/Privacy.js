export default function Privacy() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    }}>
      {/* Header Section */}
      <div style={{
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#1a2634',
          marginBottom: '10px',
          fontWeight: '600'
        }}>
          Privacy Policy
        </h1>
        <p style={{
          color: '#666',
          fontSize: '1rem',
          fontStyle: 'italic'
        }}>
          Last Updated: March 7, 2026
        </p>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#3498db',
          margin: '20px auto'
        }} />
      </div>

      {/* Content Sections */}
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        padding: '40px'
      }}>
        
        {/* Section 1: Introduction */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #3498db',
            paddingLeft: '15px'
          }}>
            1. Introduction
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#444',
            marginBottom: '10px'
          }}>
            This Privacy Policy explains how we collect, use, and protect information when users access or use the Inventory Management System ("Service").
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#444',
            backgroundColor: '#f8f9fa',
            padding: '15px',
            borderRadius: '8px',
            borderLeft: '4px solid #27ae60',
            marginTop: '15px'
          }}>
            <strong>📌 Note:</strong> By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #3498db',
            paddingLeft: '15px'
          }}>
            2. Information We Collect
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            
            {/* Account Information Card */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#2c3e50',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>👤</span>
                Account Information
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['Name', 'Email address', 'Login credentials'].map((item, index) => (
                  <li key={index} style={{
                    padding: '8px 0',
                    borderBottom: index < 2 ? '1px dashed #dee2e6' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ color: '#3498db' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Data Card */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#2c3e50',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📦</span>
                Business Data
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['Product information', 'Inventory records', 'Order details'].map((item, index) => (
                  <li key={index} style={{
                    padding: '8px 0',
                    borderBottom: index < 2 ? '1px dashed #dee2e6' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ color: '#3498db' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Data Card */}
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid #e9ecef'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#2c3e50',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>⚙️</span>
                Technical Data
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['Device information', 'Browser type', 'IP address', 'Usage data'].map((item, index) => (
                  <li key={index} style={{
                    padding: '8px 0',
                    borderBottom: index < 3 ? '1px dashed #dee2e6' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ color: '#3498db' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: How We Use Information */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #3498db',
            paddingLeft: '15px'
          }}>
            3. How We Use Information
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px',
            marginTop: '20px'
          }}>
            {[
              { icon: '🚀', text: 'Provide and maintain the Service' },
              { icon: '👥', text: 'Manage user accounts' },
              { icon: '📈', text: 'Improve system performance' },
              { icon: '💬', text: 'Provide customer support' },
              { icon: '🔒', text: 'Ensure system security' }
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'transform 0.2s',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.95rem', color: '#444' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Data Storage and Security */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #3498db',
            paddingLeft: '15px'
          }}>
            4. Data Storage and Security
          </h2>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #e9ecef'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#444',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🛡️</span>
              We take reasonable measures to protect stored information from unauthorized access, loss, or misuse.
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              fontStyle: 'italic',
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#fff',
              borderRadius: '6px'
            }}>
              ⚠️ However, no method of electronic storage is completely secure.
            </p>
          </div>
        </section>

        {/* Section 5: Data Sharing */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #3498db',
            paddingLeft: '15px'
          }}>
            5. Data Sharing
          </h2>
          <div style={{
            backgroundColor: '#e8f4fd',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #b8e0ff'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#2c3e50',
              marginBottom: '15px',
              fontWeight: '500'
            }}>
              <span style={{ fontSize: '1.2rem', marginRight: '10px' }}>🚫</span>
              We do not sell or rent user data to third parties.
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#444'
            }}>
              Data may only be shared:
            </p>
            <ul style={{
              marginTop: '10px',
              paddingLeft: '20px',
              color: '#444'
            }}>
              <li style={{ marginBottom: '5px' }}>• When required by law</li>
              <li>• To protect the security and integrity of the Service</li>
            </ul>
          </div>
        </section>

        {/* Section 6: User Responsibilities */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #3498db',
            paddingLeft: '15px'
          }}>
            6. User Responsibilities
          </h2>
          <div style={{
            backgroundColor: '#fff3e0',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #ffe0b2'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#444',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🔑</span>
              Users are responsible for maintaining the confidentiality of their login credentials and ensuring the accuracy of the information they store in the system.
            </p>
          </div>
        </section>

        {/* Section 7: Changes to This Policy */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #3498db',
            paddingLeft: '15px'
          }}>
            7. Changes to This Policy
          </h2>
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #e9ecef'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#444',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🔄</span>
              We may update this Privacy Policy from time to time. Continued use of the Service after updates means you accept the revised policy.
            </p>
          </div>
        </section>

        {/* Section 8: Contact */}
        <section style={{ marginBottom: '0' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #3498db',
            paddingLeft: '15px'
          }}>
            8. Contact
          </h2>
          <div style={{
            backgroundColor: '#1a2634',
            padding: '25px',
            borderRadius: '10px',
            color: '#fff'
          }}>
            <p style={{
              fontSize: '1rem',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>📧</span>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center'
            }}>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '12px 20px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>✉️</span>
                <a href="mailto:privacy@company.com" style={{
                  color: '#fff',
                  textDecoration: 'none',
                  borderBottom: '1px solid #3498db'
                }}>
                  israel.is5416@gmail.com
                </a>
              </div>
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '12px 20px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>📞</span>
                <span>+251 911 234 567</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Note */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        <p>This Privacy Policy was written for the Inventory Management System.</p>
      </div>
    </div>
  );
}