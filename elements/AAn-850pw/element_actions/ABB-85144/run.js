function(instance, properties, context) {
    // Publish states
    instance.publishState('decryption_output', '');
	instance.publishState('encryption_output', '');
    
    // Trigger event
    instance.triggerEvent('outputs_cleared');
}