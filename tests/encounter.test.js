/* eslint-disable no-undef */
// Assuming you're using a testing framework like Mocha or Jest

describe('Event Listeners', () => {
  let documentMock
  let windowMock

  beforeEach(() => {
    // Mock document and window objects
    documentMock = {
      getElementById: jest.fn().mockReturnValue({
        style: { display: 'none' },
        addEventListener: jest.fn()
      }),
      getElementsByClassName: jest.fn().mockReturnValue([
        { addEventListener: jest.fn() },
        { addEventListener: jest.fn() }
      ])
    }

    windowMock = {
      location: {
        href: ''
      }
    }

    // Assign mocks to global objects
    global.document = documentMock
    global.window = windowMock
  })

  afterEach(() => {
    // Reset global objects
    delete global.document
    delete global.window
  })

  it('should hide the options container on page load', () => {
    // Simulate the load event
    const loadEvent = new Event('load')
    window.dispatchEvent(loadEvent)

    expect(documentMock.getElementById).toHaveBeenCalledWith('options-container')
    expect(documentMock.getElementById('options-container').style.display).toBe('none')
  })

  it('should show the options container when the next button is clicked', () => {
    // Simulate the click event on the next button
    const nextButton = { addEventListener: jest.fn() }
    documentMock.getElementById.mockReturnValueOnce(nextButton)

    const clickEvent = new Event('click')
    nextButton.addEventListener.mockImplementationOnce((event, handler) => {
      handler(clickEvent)
    })

    expect(documentMock.getElementById).toHaveBeenCalledWith('next-button')
    expect(documentMock.getElementById('options-container').style.display).toBe('block')
  })

  it('should navigate to the fortune.html page when an option button is clicked', () => {
    // Simulate the click event on an option button
    const optionButton = { addEventListener: jest.fn() }
    documentMock.getElementsByClassName.mockReturnValueOnce([optionButton])

    const clickEvent = new Event('click')
    optionButton.addEventListener.mockImplementationOnce((event, handler) => {
      handler(clickEvent)
    })

    expect(documentMock.getElementsByClassName).toHaveBeenCalledWith('option-button')
    expect(windowMock.location.href).toBe('../html/fortune.html')
  })
})
