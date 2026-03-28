export default function Terms() {
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
          Terms of Service
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
          backgroundColor: '#e74c3c', // Red color to differentiate from Privacy Policy
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
        
        {/* Section 1: Acceptance of Terms */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            1. Acceptance of Terms
          </h2>
          <div style={{
            backgroundColor: '#fef5f5',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #fadbd8'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#444',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>📋</span>
              By accessing or using the Inventory Management System ("Service"), you agree to comply with these Terms of Service.
            </p>
          </div>
        </section>

        {/* Section 2: Description of Service */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            2. Description of Service
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
              <span style={{ fontSize: '1.5rem' }}>🛠️</span>
              The Service provides tools for managing products, inventory, and orders for businesses.
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
              ⚠️ The system is provided "as is" and may be updated or modified at any time.
            </p>
          </div>
        </section>

        {/* Section 3: User Accounts */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            3. User Accounts
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}>
            
            {/* Responsibility Card 1 */}
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
                <span style={{ fontSize: '1.5rem' }}>🔐</span>
                Account Security
              </h3>
              <p style={{ color: '#444', fontSize: '0.95rem' }}>
                Users are responsible for maintaining the security of their accounts
              </p>
            </div>

            {/* Responsibility Card 2 */}
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
                <span style={{ fontSize: '1.5rem' }}>🤫</span>
                Confidentiality
              </h3>
              <p style={{ color: '#444', fontSize: '0.95rem' }}>
                Keeping login information confidential
              </p>
            </div>

            {/* Responsibility Card 3 */}
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
                <span style={{ fontSize: '1.5rem' }}>🔄</span>
                Account Activity
              </h3>
              <p style={{ color: '#444', fontSize: '0.95rem' }}>
                All activities performed under their accounts
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Acceptable Use */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            4. Acceptable Use
          </h2>
          <div style={{
            backgroundColor: '#fee9e7',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #f5c6b8'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#c0392b',
              marginBottom: '15px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>⛔</span>
              Users agree not to:
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { icon: '⚖️', text: 'Use the Service for illegal activities' },
                { icon: '🚫', text: 'Attempt to gain unauthorized access to the system' },
                { icon: '💥', text: 'Disrupt or damage the Service' }
              ].map((item, index) => (
                <li key={index} style={{
                  padding: '10px 0',
                  borderBottom: index < 2 ? '1px dashed #f5c6b8' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#444'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 5: Data Responsibility */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            5. Data Responsibility
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
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>📊</span>
              Users are responsible for the accuracy and legality of the data they enter into the system, including product and order information.
            </p>
          </div>
        </section>

        {/* Section 6: Service Availability */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            6. Service Availability
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
              gap: '10px',
              marginBottom: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🕒</span>
              We strive to keep the Service available and functioning properly
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              fontStyle: 'italic',
              padding: '10px',
              backgroundColor: '#fff',
              borderRadius: '6px'
            }}>
              ⚠️ However, we do not guarantee uninterrupted operation.
            </p>
          </div>
        </section>

        {/* Section 7: Limitation of Liability */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            7. Limitation of Liability
          </h2>
          <div style={{
            backgroundColor: '#fbe9e7',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #ffccbc'
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#d84315',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '500'
            }}>
              <span style={{ fontSize: '1.5rem' }}>⚖️</span>
              The Service provider is not responsible for:
            </p>
            <ul style={{
              marginTop: '15px',
              paddingLeft: '20px',
              color: '#444'
            }}>
              <li style={{ marginBottom: '8px' }}>• Business losses</li>
              <li style={{ marginBottom: '8px' }}>• Data loss</li>
              <li>• Damages resulting from the use or inability to use the Service</li>
            </ul>
          </div>
        </section>

        {/* Section 8: Termination */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            8. Termination
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
              <span style={{ fontSize: '1.5rem' }}>🔚</span>
              We reserve the right to suspend or terminate accounts that violate these terms.
            </p>
          </div>
        </section>

        {/* Section 9: Changes to Terms */}
        <section style={{ marginBottom: '35px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            9. Changes to Terms
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
              These Terms of Service may be updated at any time. Continued use of the Service indicates acceptance of the updated terms.
            </p>
          </div>
        </section>

        {/* Section 10: Governing Law */}
        <section style={{ marginBottom: '0' }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: '#1a2634',
            marginBottom: '15px',
            fontWeight: '500',
            borderLeft: '4px solid #e74c3c',
            paddingLeft: '15px'
          }}>
            10. Governing Law
          </h2>
          <div style={{
            backgroundColor: '#1a2634',
            padding: '25px',
            borderRadius: '10px',
            color: '#fff'
          }}>
            <p style={{
              fontSize: '1rem',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>⚖️</span>
              These terms are governed by applicable laws in the jurisdiction where the Service provider operates.
            </p>
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
        <p>By using this Service, you acknowledge that you have read and understood these Terms of Service.</p>
      </div>
    </div>
  );
}